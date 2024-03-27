import axios from "axios";
import { Stack, Typography } from "@mui/material";
import Foods from "./FoodMap";

type FoodType = {
  _id: string;
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

export const GetAllFoods = async () => {
  try {
    const { data } = await axios.get<FoodType[]>("http://localhost:8000/foods");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function AllFoods() {
  const data: any = await GetAllFoods();

  return (
    <Stack width={"100%"}>
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "26px" }}>All Foods</Typography>
      </Stack>

      <Stack
        sx={{
          display: "flex",
          gap: "5px",
          flexWrap: "wrap",
          direction: "row",
        }}
      >
        <Foods data={data} />
      </Stack>
    </Stack>
  );
}
