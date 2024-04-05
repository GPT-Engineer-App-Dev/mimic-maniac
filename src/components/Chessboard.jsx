import { Grid, GridItem, Text } from "@chakra-ui/react";

const Chessboard = () => {
  const boardSize = 8;

  const initialBoard = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜", "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"];

  return (
    <Grid templateColumns={`repeat(${boardSize}, 1fr)`} templateRows={`repeat(${boardSize}, 1fr)`} width="400px" height="400px">
      {initialBoard.map((piece, index) => {
        const row = Math.floor(index / boardSize);
        const col = index % boardSize;
        const isEvenSquare = (row + col) % 2 === 0;
        return (
          <GridItem key={index} bg={isEvenSquare ? "gray.100" : "gray.700"} display="flex" justifyContent="center" alignItems="center">
            <Text fontSize="2xl">{piece}</Text>
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default Chessboard;
