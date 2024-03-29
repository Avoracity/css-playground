import "../styles/Likes.css";
import LikesIcon from "../assets/like-icon.svg";
import { useState, useEffect  } from 'react';

export default function Likes() {
  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    // Add the Tailwind CSS class to the body when the component mounts
    document.body.classList.add('bg-blue-600');

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('bg-blue-600');
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      // Rotate the icon back to its original position after 0.5s
      setTimeout(() => {
        setIsClicked(false);
      }, 500);

// top-right line 
// then bot-left line
// then top-right firework
// then bot-right firework
// then top-left firework
// then bot-left firework

/*
      setTimeout(()=>{
        
      }, 1000);
*/


    }
  };

  return (
    <>
 
      <img
        src={LikesIcon}
        alt="Likes Icon"
        
        className={`like-button ${isClicked ? 'clicked' : ''}`} //*if isClicked true, return clicked, else nothing */
        onClick={handleClick}
      />
    </>
  );
}