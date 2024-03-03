import "../styles/Likes.css";
import LikesIcon from "../assets/like-icon.svg";
import { useState } from 'react';
export default function Likes() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      // Rotate the icon back to its original position after 0.5s
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
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