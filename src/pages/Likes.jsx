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
      }, 2500);



    }
  };

  
  return (
    <div className="like-container pt-80">
      {/* Line animation and dots*/}
      {isClicked && (
        <>
        <div>
          <div className="line-animation line-red bg-red-200"></div>
          <div className="line-animation line-blue bg-blue-200"></div>
          <div className="line-animation line-yellow bg-yellow-200"></div>
          <div className="line-animation line-green bg-green-200"></div>
        </div>
        
        
        <div>
   
          
          <div className="line-dot red-dot bg-red-200"></div>
          <div className="line-dot red-dot bg-red-200"></div>
          <div className="line-dot red-dot bg-red-200"></div>
          <div className="line-dot red-dot bg-red-200"></div>
          <div className="line-dot red-dot bg-red-200"></div>
          <div className="line-dot red-dot bg-red-200"></div>

          <div className="line-dot blue-dot"></div>
          <div className="line-dot blue-dot"></div>
          <div className="line-dot blue-dot"></div>
          <div className="line-dot blue-dot"></div>
          <div className="line-dot blue-dot"></div>
          <div className="line-dot blue-dot"></div>

          <div className="line-dot yellow-dot"></div>
          <div className="line-dot yellow-dot"></div>
          <div className="line-dot yellow-dot"></div>
          <div className="line-dot yellow-dot"></div>
          <div className="line-dot yellow-dot"></div>
          <div className="line-dot yellow-dot"></div>

          <div className="line-dot green-dot"></div>
          <div className="line-dot green-dot"></div>
          <div className="line-dot green-dot"></div>
          <div className="line-dot green-dot"></div>
          <div className="line-dot green-dot"></div>
          <div className="line-dot green-dot"></div>
        </div>
          
        </>

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