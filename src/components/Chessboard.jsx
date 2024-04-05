import { Grid, GridItem, Image } from "@chakra-ui/react";

const Chessboard = ({ board, onSquareClick }) => {
  const boardSize = 8;

  return (
    <Grid templateColumns={`repeat(${boardSize}, 1fr)`} templateRows={`repeat(${boardSize}, 1fr)`} width="400px" height="400px">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => {
          const isEvenSquare = (rowIndex + colIndex) % 2 === 0;
          return (
            <GridItem key={`${rowIndex}-${colIndex}`} bg={isEvenSquare ? "gray.100" : "gray.700"} display="flex" justifyContent="center" alignItems="center" onClick={() => onSquareClick(rowIndex, colIndex)}>
              {piece && <Image src={`/src/assets/${piece}.png`} alt={piece} width="80%" height="80%" />}
            </GridItem>
          );
        }),
      )}
    </Grid>
  );
};

export default Chessboard;
