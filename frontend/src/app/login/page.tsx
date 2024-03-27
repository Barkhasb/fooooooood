"use client";
import {
  Stack,
  Button,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  Link,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    router.push("/signup");
  };

  const handleChange1 = async () => {
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email,
        password,
      });
      console.log(res.data);

      if (!res.data) {
        return "Email or Password wrong";
      } else router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Stack padding="50px" gap="100px">
      <Stack gap="10px" mx="auto" width={400}>
        <Typography sx={{ height: "100px" }} textAlign={"center"} variant="h4">
          Нэвтрэх
        </Typography>
        <FormControl>
          <FormLabel color="success">И-мэйл</FormLabel>
          <TextField
            onChange={(event) => setEmail(event.target.value)}
            color="success"
            placeholder="И-мэйл"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="success">Нууц үг</FormLabel>
          <TextField
            onChange={(event) => setPassword(event.target.value)}
            color="success"
            placeholder="Нууц үг"
          />
        </FormControl>
        <Link color="black" href="/forgotPassword" underline="none">
          Нууц үг сэргээх
        </Link>
        <Button
          onClick={handleChange1}
          variant="contained"
          sx={{ backgroundColor: "#18BA51" }}
        >
          Нэвтрэх
        </Button>
        <Typography sx={{ color: "black" }} textAlign={"center"}>
          Эсвэл
        </Typography>
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #18BA51",
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;

{
  /* {TextFields.map(({ name, placeholder }, index) => (
  <TextField
    key={index}
    name={name}
    placeholder={placeholder}
    type="text"
  />
))} */
}
