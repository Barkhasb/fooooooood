import { Stack } from "@mui/material";
import React from "react";
import DiscountFood from "@/components/Home/DiscountFood";
import MainFood from "@/components/Home/MainFood";
import Dessert from "@/components/Home/Dessert";
import Salad from "@/components/Home/Salad";
import FoodHeader from "@/components/Home/FoodHeader";
import Choose from "@/components/Home/Choose";

const Home = () => {
  return (
    <Stack padding="100px 0">
      <FoodHeader />
      <Choose />
      <DiscountFood />
      <MainFood />
      <Dessert />
      <Salad />
    </Stack>
  );
};

export default Home;
