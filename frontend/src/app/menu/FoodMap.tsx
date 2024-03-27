"use client";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";

type FoodType = {
  name: string;
  image: string;
  ingredients: string;
  price: string;
};

type Foods = {
  data: FoodType[];
};

export default function Foods(props: Foods) {
  const { data } = props;

  return (
    <Stack
      padding="100px 0"
      height="fit-content"
      direction="row"
      width={"100%"}
      gap="100px"
      flexWrap="wrap"
    >
      {data?.slice(0).map((el: FoodType, index: number) => (
        <Stack sx={{ width: "286px", height: "256px", gap: "14px" }}>
          <Stack
            sx={{
              width: "282px",
              height: "186px",
              borderRadius: "16px",
              overflow: "hidden",
              objectFit: "cover",
            }}
          >
            {" "}
            <img src={el.image} alt="" width={282} height={185} />
          </Stack>

          <Stack
            sx={{
              height: "56px",
              gap: "2px",
              paddingLeft: "10px",
            }}
          >
            <Typography
              sx={{ color: "black", fontSize: "18px", fontWeight: "600" }}
            >
              {el.name}
            </Typography>
            <Typography
              sx={{ fontWeight: "600", fontSize: "18px", color: "#18BA51" }}
            >
              {el.price}₮
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
