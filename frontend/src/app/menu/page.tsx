import { Button, Stack } from "@mui/material";
import React from "react";
import AllFoods from "./AllFoods";

const Menu = () => {
  return (
    <Stack padding="50px 120px">
      <Stack direction="row" justifyContent="space-between">
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid grey ",
            width: "300px",
            fontWeight: "bold",
          }}
        >
          Breakfast
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid grey",
            width: "300px",
            fontWeight: "bold",
          }}
        >
          Soup
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid grey",
            width: "300px",
            fontWeight: "bold",
          }}
        >
          Main course
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid grey",
            width: "300px",
            fontWeight: "bold",
          }}
        >
          Dessert
        </Button>
      </Stack>
      <AllFoods />
    </Stack>
  );
};

export default Menu;
