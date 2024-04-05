import React from "react";

const PieceSelector = ({ color, onSelect }) => {
  const pieces = ["q", "r", "b", "n"];

  return (
    <div>
      <h3>Select a piece to promote to:</h3>
      {pieces.map((piece) => (
        <button key={piece} onClick={() => onSelect(piece)}>
          {color + piece}
        </button>
      ))}
    </div>
  );
};

export default PieceSelector;