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
    <div className="like-container pt-80">
      {/* Line animation */}
      {isClicked && (
        <div>
          <div className="line-animation line1 bg-red-200"></div>
          <div className="line-animation line2 bg-blue-200"></div>
          <div className="line-animation line3 bg-yellow-200"></div>
          <div className="line-animation line4 bg-green-200"></div>
        </div>
      )}

      {/* Like button */}
      <img
        src={LikesIcon}
        alt="Likes Icon"
        className={`like-button ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}
      />
    </div>
  );
}