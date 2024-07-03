import React from "react";

const MouseClicker = () => {
    const handleCLick = (event) => {
        console.log(event.target.name);
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
        console.log(event.target.src);
    };
    return (
        <div>
        <button name="one" onClick={handleCLick}>
        clickeame
        </button>
        <img 
        src="./public/hipopotamo.png" 
        alt="hipopótamo"
        onClick={handleImageClick}
        />
        </div>
    )
}

export default MouseClicker;