import React, { useState } from "react";
import X from "../../../assets/X.png";
import O from "../../../assets/O.png";

export function Square({ position, shape, onAddPosition, idx }) {
  const [isClicked, setClicked] = useState(false);
  const [imgSrc, setSrc] = useState();
  const [showHover, setHover] = useState(false)


  const checkClick = () => {
    if (isClicked) return;
    setClicked(true);
    onAddPosition(shape, idx);
    shape === "X" ? setSrc(X) : setSrc(O);
  };

  // const showTurn = () => {

  // }


  return (
    <div className="square">
      <div
        className={`${position} square flex align-center justify-center `}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => checkClick()}>
        {showHover && !isClicked &&
          <img className="turn-hover" src={shape === "X" ? X : O} alt="turn-shape-hover" />
        }
        {isClicked && <img alt="shape-img" src={imgSrc}></img>}
      </div>
    </div>
  );
}
