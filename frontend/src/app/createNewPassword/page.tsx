import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Stack padding="50px" gap="100px">
      <Stack gap="30px" mx="auto" width={400}>
        <Typography sx={{ height: "100px" }} textAlign={"center"} variant="h4">
          Шинэ нууц үг зохиох
        </Typography>
        <FormControl>
          <FormLabel color="success">Hууц үг</FormLabel>
          <TextField color="success" placeholder="Hууц үг" />
        </FormControl>
        <FormControl>
          <FormLabel color="success">Hууц үг давтах</FormLabel>
          <TextField color="success" placeholder="Hууц үг давтах" />
        </FormControl>
        <Button variant="contained" sx={{ backgroundColor: "#18BA51" }}>
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default page;
