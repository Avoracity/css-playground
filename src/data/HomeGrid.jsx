import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { SimpleGrid, Box, Text } from '@chakra-ui/react'; // Import necessary Chakra UI components
import '../styles/HomeGrid.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function HomeGrid() {
    return (
        <SimpleGrid spacing={18} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {/* More Card components... */}

            <Card bg="bg-blue-600" to="/Likes">
    
                <CardBody>
                    <Text color = 'white' > Like button with confetti animation </Text>
                </CardBody>
         
              
      
            </Card>

            {/* More Card components... */}
            <Card bg="bg-amber-950" to="/Entrance">
     
        
                <CardBody>
                    <Text color='white'>Text Design on Entry</Text>
                </CardBody>
          
                 
           
            </Card>

        </SimpleGrid> 
    );
}

// Define propTypes for the children prop in Card, CardHeader, CardBody, and CardFooter components
const Card = ({ children, bg, to}) => {
    return (
        <Link to={to}>
        <Box
            boxShadow={"md"}
            borderRadius='12px'            
            p='48px'
            overflow='hidden'
            className={bg} // Tailwind
            height='200px'
        >
            {children}
        </Box>
        </Link>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired, // Require children to be a React node
    bg: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
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
