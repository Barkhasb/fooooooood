import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const FoodHeader = () => {
  return (
    <Stack
      alignItems="center"
      padding="100px 0"
      gap="50px"
      sx={{
        backgroundImage: `url('/Footer.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "530px",
      }}
    >
      <Stack direction="row">
        <Stack gap="20px" sx={{ width: "50%" }}>
          <Typography variant="h1" color="white">
            Pinecone Food delivery
          </Typography>
          <Stack sx={{ borderBottom: "1px solid white" }}></Stack>
          <Typography color="white">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Stack justifyContent="center" alignItems="end" sx={{ width: "50%" }}>
          <Image
            src="/foodHead.png"
            width={500}
            height={400}
            alt="foodHeader"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FoodHeader;
