import { useState } from "react";
import Chessboard from "./Chessboard";
import PieceSelector from "./PieceSelector";

const initialBoard = [
  ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
  ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
];

const Game = () => {
  const [board, setBoard] = useState(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [promotionSquare, setPromotionSquare] = useState(null);

  const handleMove = (fromRow, fromCol, toRow, toCol) => {
    const newBoard = [...board];
    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = "";

    if (selectedPiece && selectedPiece[1] === "p" && (toRow === 0 || toRow === 7)) {
      setPromotionSquare({ row: toRow, col: toCol });
    } else {
      setBoard(newBoard);
      setSelectedPiece(null);
    }
  };

  const handlePromotion = (piece) => {
    const { row, col } = promotionSquare;
    const newBoard = [...board];
    newBoard[row][col] = selectedPiece[0] + piece;
    setBoard(newBoard);
    setSelectedPiece(null);
    setPromotionSquare(null);
  };

  return (
    <>
      <Chessboard board={board} onSquareClick={(row, col) => setSelectedPiece(board[row][col])} onMove={handleMove} selectedSquare={selectedPiece ? { row: selectedPiece.row, col: selectedPiece.col } : null} />
      {promotionSquare && <PieceSelector color={selectedPiece[0]} onSelect={handlePromotion} />}
    </>
  );
};

export default Game;
