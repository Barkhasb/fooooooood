import { Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const tools = [
  { title: "Нүүр" },
  { title: "Холбоо барих" },
  { title: "Хоолны цэс" },
  { title: "Үйлчилгээний нөхцөл" },
  { title: "Хүргэлтийн бүс" },
  { title: "Нууцлалын бодлого" },
];

const LoginFooter = () => {
  return (
    <Stack>
      <Stack
        alignItems="center"
        padding="100px"
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
        <Stack direction="row" gap="10px" alignItems="center">
          <Image src="/Vector1.png" width={30} height={25} alt="Vector" />
          <Typography color="white">Food delivery</Typography>
        </Stack>
        <Stack width="100%" direction="row" justifyContent="space-between">
          {tools.map(({ title }, index) => (
            <Stack
              sx={{ borderBottom: "1px solid white" }}
              color="white"
              key={index}
            >
              {title}
            </Stack>
          ))}
        </Stack>
        <Stack direction="row" gap="10px">
          <Image src="/facebook.png" width={30} height={30} alt="fb" />
          <Image src="/instagram.png" width={30} height={30} alt="fb" />
          <Image src="/twitter.png" width={30} height={30} alt="fb" />
        </Stack>
        <Stack sx={{ borderBottom: "1px solid white" }} width="100%"></Stack>
        <Stack>
          <Typography color="white">© 2024 Pinecone Foods LLC</Typography>
          <Typography color="white">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginFooter;
