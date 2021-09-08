import React from "react";
import { Square } from "../Board/Square/Square";
export function Board({ onAddPosition, onSetShape, shape, winner }) {
  const positions = [
    "top-1",
    "top-2",
    "top-3",
    "mid-1",
    "mid-2",
    "mid-3",
    "bottom-1",
    "bottom-2",
    "bottom-3",
  ];

  return (
    <div className="board">
      <div className="main-content grid">
        {positions.map((position, idx) => {
          return (
            <Square
              idx={idx}
              shape={shape}
              key={idx}
              position={position}
              onSetShape={onSetShape}
              onAddPosition={onAddPosition}
            />
          );
        })}
      </div>
      {winner && <div>
        <h2>Winner is:</h2> <p>{winner}</p>
      </div>
      }
    </div>
  );
}
