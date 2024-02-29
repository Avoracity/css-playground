import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { SimpleGrid, Box, Text } from '@chakra-ui/react'; // Import necessary Chakra UI components
import '../styles/HomeGrid.css';

export default function HomeGrid() {
    return (
        <SimpleGrid spacing={24} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {/* More Card components... */}

            <Card bg="bg-orange-50" >
    
                <CardBody>
                    <Text >View a summary of all your customers over the last month.</Text>
                </CardBody>
         
              
      
            </Card>

            {/* More Card components... */}
            <Card bg="bg-amber-950	">
     
        
                <CardBody>
                    <Text color='white'>View a summary of all your customers over the last month.</Text>
                </CardBody>
          
                 
           
            </Card>

        </SimpleGrid> 
    );
}

// Define propTypes for the children prop in Card, CardHeader, CardBody, and CardFooter components
const Card = ({ children, bg}) => {
    return (
        <Box
            boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
            borderRadius='12px'            
            p='48'
            overflow='hidden'
            className={bg} // Tailwind
        >
            {children}
        </Box>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired, // Require children to be a React node
    bg: PropTypes.string.isRequired
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
