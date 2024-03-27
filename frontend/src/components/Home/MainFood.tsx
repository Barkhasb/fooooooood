import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MainFood = () => {
  return (
    <Stack padding="20px 120px" direction="row" justifyContent="space-between">
      <Stack direction="row" gap="10px" alignItems="center">
        <Image src="/star.png" width={32} height={32} alt="star" />
        <Typography sx={{ fontWeight: "bold" }}> Үндсэн хоол</Typography>
      </Stack>
      <Stack direction="row" gap="10px" alignItems="center">
        <Typography color="#18BA51">Бүгдийг харах</Typography>
        <ArrowForwardIosIcon sx={{ color: "#18BA51" }} />
      </Stack>
    </Stack>
  );
};

export default MainFood;
