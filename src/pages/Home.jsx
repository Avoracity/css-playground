import "../styles/Home.css";
import FadeInOut from '../components/FadeInOut.jsx'; // Assuming the 'fadeinout.js' file is in the same directory as 'home.jsx'
import RiseUpTransition from '../components/RiseUpTransition.jsx';


export default function Homepage() {
    return (
        <div>
            <FadeInOut show={true} duration={1000}>
                <RiseUpTransition>
                    <h1 className="text-sky-400 p-8">Welcome to the Homepage</h1>
                </RiseUpTransition>
            </FadeInOut>
            <FadeInOut show={true} duration={1000}>
                <RiseUpTransition>
                    <p>This is the content of the homepage.</p>
                </RiseUpTransition>
            </FadeInOut>
        </div>
    );
}
