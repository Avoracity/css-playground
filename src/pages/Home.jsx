import "../styles/Home.css";
import FadeInOut from '../components/FadeInOut.jsx'; // Assuming the 'fadeinout.js' file is in the same directory as 'home.jsx'

export default function Homepage() {
    return(
        <div>
            <FadeInOut show={true} duration={1000}>
                <h1 className="text-sky-400 p-8">Welcome to the Homepage</h1>
            </FadeInOut>
            <FadeInOut show={true} duration={1000}>
                <p>This is the content of the homepage.</p>
            </FadeInOut>
        </div>
    );
}
