import "../styles/Home.css";
import FadeInOut from '../components/FadeInOut.jsx'; // Assuming the 'fadeinout.js' file is in the same directory as 'home.jsx'
import RiseUpTransition from '../components/RiseUpTransition.jsx';
import HomeGrid from '../data/HomeGrid.jsx'; // Assuming the DashboardGrid component is in the correct directory
import {useEffect} from 'react';

export default function Home() {

    useEffect(() => {
        // Add the Tailwind CSS class to the body when the component mounts
        document.body.classList.add('bg-orange-50');
    
        // Cleanup function to remove the class when the component unmounts
        return () => {
          document.body.classList.remove('bg-orange-50');
        };
      }, []); // Empty dependency array ensures the effect runs only once when the component mounts

      
    return (
        <div>
            <FadeInOut show={true} duration={1000}>
                <RiseUpTransition>
                    <h1 className="font-bold p-8 pt-80"style={{ backgroundImage: 'linear-gradient(90deg, hsla(23, 62%, 70%, 1) 0%, hsla(9, 81%, 23%, 1) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Welcome to the Homepage</h1>
                </RiseUpTransition>
            </FadeInOut>
            <FadeInOut show={true} duration={1000}>
                <RiseUpTransition>
                    <p className ="pb-24">This is the content of the homepage.</p>
                </RiseUpTransition>
            </FadeInOut>

            {/* Use the HomeGrid component here */}
            <HomeGrid />
        </div>
    );
}