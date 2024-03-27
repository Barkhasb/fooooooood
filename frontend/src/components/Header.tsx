"use client";
import {
  Stack,
  Button,
  TextField,
  FormControl,
  FormLabel,
  Link,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { Home, PersonOutline } from "@mui/icons-material";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      padding="0px 120px"
    >
      <Stack direction="row" spacing={2}>
        <Image src="/Vector.png" width={32} height={30} alt="Vector" />
        <Button sx={{ color: "#18BA51" }}>НҮҮР</Button>
        <Button sx={{ color: "black" }}>ХООЛНЫ ЦЭС</Button>
        <Button sx={{ color: "black" }} href="#text-buttons">
          ХҮРГЭЛТИЙН БҮС
        </Button>
      </Stack>
      <Stack direction="row" alignItems="center">
        <TextField
          variant="outlined"
          placeholder="asdasd"
          sx={{ borderRadius: "10px" }}
        />
        <Button sx={{ color: "black" }} startIcon={<Home />}>
          Сагс
        </Button>
        <Button
          onClick={handleOpen}
          sx={{ color: "black" }}
          startIcon={<PersonOutline />}
        >
          Нэвтрэх
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack padding="20px" gap="100px">
            <Stack gap="10px" mx="auto" width={400}>
              <Typography
                sx={{ height: "80px" }}
                textAlign={"center"}
                variant="h4"
              >
                Нэвтрэх
              </Typography>
              <FormControl>
                <FormLabel color="success">И-мэйл</FormLabel>
                <TextField color="success" placeholder="И-мэйл" />
              </FormControl>
              <FormControl>
                <FormLabel color="success">Нууц үг</FormLabel>
                <TextField color="success" placeholder="Нууц үг" />
              </FormControl>
              <Link color="black" href="#" underline="none">
                Нууц үг сэргээх
              </Link>
              <Stack gap="15px">
                <Button sx={{ backgroundColor: "#18BA51", color: "black" }}>
                  Нэвтрэх
                </Button>
                <Typography sx={{ color: "black" }} textAlign={"center"}>
                  Эсвэл
                </Typography>
                <Button
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
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

export default Header;
{
  /* <Typography sx={{ borderBottom: "1px solid red" }}>asdasd</Typography>; */
}
