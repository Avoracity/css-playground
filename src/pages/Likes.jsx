import "../styles/Likes.css";
import LikesIcon from "../assets/like-icon.svg";

export default function Likes() {
  return (
    <>
    
      <img src={LikesIcon} alt="Likes Icon" className="like-button w-32 h-32"  /> {/* Render the SVG using an <img> tag */}

    </>
  );
}


