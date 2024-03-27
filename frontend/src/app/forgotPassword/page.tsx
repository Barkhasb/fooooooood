"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleChange = async () => {
    try {
      const res = await axios.post("http://localhost:8000/forgot", {
        email,
      });
      console.log(res.data);
      if (!res.data) {
        return "email oruulah";
      } else router.push("/forgotPasswordnext");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Stack>
      <Stack gap="100px" padding="120px">
        <Stack gap="20px" mx="auto" width={400}>
          <Typography
            sx={{ height: "100px" }}
            textAlign={"center"}
            variant="h4"
          >
            Нууц үг сэргээх
          </Typography>
          <FormControl>
            <FormLabel color="success">И-мэйл</FormLabel>
            <TextField
              onChange={(event) => setEmail(event.target.value)}
              color="success"
              placeholder="И-мэйл"
            />
          </FormControl>
          <Button
            onClick={handleChange}
            variant="contained"
            sx={{ backgroundColor: "#18BA51" }}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ForgotPasswordPage;
