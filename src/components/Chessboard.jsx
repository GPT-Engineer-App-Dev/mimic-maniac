import { Grid, GridItem } from "@chakra-ui/react";

const Chessboard = () => {
  const boardSize = 8;

  return (
    <Grid templateColumns={`repeat(${boardSize}, 1fr)`} templateRows={`repeat(${boardSize}, 1fr)`} width="400px" height="400px">
      {[...Array(boardSize * boardSize)].map((_, index) => {
        const row = Math.floor(index / boardSize);
        const col = index % boardSize;
        const isEvenSquare = (row + col) % 2 === 0;
        return <GridItem key={index} bg={isEvenSquare ? "gray.100" : "gray.700"} />;
      })}
    </Grid>
  );
};

export default Chessboard;
