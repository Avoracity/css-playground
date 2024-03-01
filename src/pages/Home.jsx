import "../styles/Home.css";
import FadeInOut from '../components/FadeInOut.jsx'; // Assuming the 'fadeinout.js' file is in the same directory as 'home.jsx'
import RiseUpTransition from '../components/RiseUpTransition.jsx';
import HomeGrid from '../data/HomeGrid.jsx'; // Assuming the DashboardGrid component is in the correct directory

export default function Home() {
    return (
        <div>
            <FadeInOut show={true} duration={1000}>
                <RiseUpTransition>
                    <h1 className="font-bold p-8"style={{ backgroundImage: 'linear-gradient(90deg, hsla(23, 62%, 70%, 1) 0%, hsla(9, 81%, 23%, 1) 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextFillColor: 'transparent' }}>Welcome to the Homepage</h1>
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