"use client";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { error } from "console";

const page = () => {
  // const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const router = useRouter();

  const handleChange = async () => {
    try {
      const { data } = await axios.post("http://localhost:8000/signup", {
        name,
        email,
        phone,
        password,
        rePassword,
      });
      console.log(data);

      if (
        data ===
          `E11000 duplicate key error collection: test.users index: email_1 dup key: { email: "${email}" }`
      ) {
        alert("duplicate");
      } else {
        router.push("/login");
      }
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <Stack gap="100px" padding="50px">
      <Stack gap="10px" mx="auto" width={400}>
        <Typography sx={{ height: "100px" }} textAlign={"center"} variant="h4">
          Бүртгүүлэх
        </Typography>
        <FormControl>
          <FormLabel color="success">Нэр</FormLabel>
          <TextField
            onChange={(event) => setName(event.target.value)}
            color="success"
            placeholder="Нэрээ оруулна уу"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="success">И-мэйл</FormLabel>
          <TextField
            onChange={(event) => setEmail(event.target.value)}
            color="success"
            placeholder="И-мэйл хаягаа оруулна уу"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="success">Хаяг</FormLabel>
          <TextField
            onChange={(event) => setPhone(event.target.value)}
            color="success"
            placeholder="Та хаягаа оруулна уу"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="success">Нууц үг</FormLabel>
          <TextField
            onChange={(event) => setPassword(event.target.value)}
            color="success"
            placeholder="Нууц үгээ оруулна уу"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="success">Нууц үг давтах</FormLabel>
          <TextField
            onChange={(event) => setRePassword(event.target.value)}
            color="success"
            placeholder="Нууц үгээ оруулна уу"
          />
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Үйлчилгээний нөхцөо зөвшөөрөх"
          />
        </FormGroup>
        <Button
          onClick={handleChange}
          variant="contained"
          sx={{ backgroundColor: "#18BA51" }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};

export default page;
