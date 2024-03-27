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
    <Stack padding="120px">
      <Stack gap="20px" mx="auto" width={400}>
        <Typography sx={{ height: "100px" }} textAlign={"center"} variant="h4">
          Нууц үг сэргээх
        </Typography>
        <Typography>
          Таны example@pinecone.mn хаяг руу сэргээх код илгээх болно.
        </Typography>
        <FormControl>
          <FormLabel color="success">Нууц код</FormLabel>
          <TextField color="success" placeholder="И-мэйл" />
        </FormControl>
        <Button variant="contained" sx={{ backgroundColor: "#18BA51" }}>
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default page;
