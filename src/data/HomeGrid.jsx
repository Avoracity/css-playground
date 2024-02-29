import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { SimpleGrid, Box, Heading, Text, Button } from '@chakra-ui/react'; // Import necessary Chakra UI components
import '../styles/Home.css';

export default function HomeGrid() {
    return (
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {/* More Card components... */}

            <Card bg ="#D7A88F">
                <CardHeader>
                    <Heading size='md'>Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>

            {/* More Card components... */}
            <Card bg ="#B27E62">
                <CardHeader>
                    <Heading size='md'>Marketing dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>

        </SimpleGrid> 
    );
}

// Define propTypes for the children prop in Card, CardHeader, CardBody, and CardFooter components
const Card = ({ children, bg}) => {
    return (
        <Box
            rounded='lg'
            borderWidth='1px'
            borderColor='gray.200'
            p='4'
            overflow='hidden'
            bg={bg}
        >
            {children}
        </Box>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired, // Require children to be a React node
    bg: PropTypes.string.isRequired
};

// Similarly, define propTypes for CardHeader, CardBody, and CardFooter components
const CardHeader = ({ children }) => {
    return (
        <Box borderBottomWidth='1px' pb='2'>
            {children}
        </Box>
    );
};

CardHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

const CardBody = ({ children }) => {
    return (
        <Box py='4'>
            {children}
        </Box>
    );
};

CardBody.propTypes = {
    children: PropTypes.node.isRequired,
};

const CardFooter = ({ children }) => {
    return (
        <Box borderTopWidth='1px' pt='2'>
            {children}
        </Box>
    );
};

CardFooter.propTypes = {
    children: PropTypes.node.isRequired,
};
