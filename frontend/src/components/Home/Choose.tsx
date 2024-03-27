import { Stack } from "@mui/material";
import React from "react";
import Image from "next/image";

const items = [
  {
    icon: <Image src="/book.png" width={32} height={32} alt="book" />,
    textBold: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <Image src="/time.png" width={32} height={32} alt="book" />,
    textBold: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <Image src="/food.png" width={32} height={32} alt="book" />,
    textBold: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <Image src="/book.png" width={32} height={32} alt="book" />,
    textBold: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

const Choose = () => {
  return (
    <Stack direction="row" justifyContent="space-between" padding="120px">
      {items.map(({ icon, textBold, text }, index) => (
        <Stack
          key={index}
          width={300}
          height={180}
          sx={{
            border: "1px solid #5E5E5E",
            borderRadius: "10px",
            boxShadow: "2px 2px 2px gray ",
          }}
        >
          <Stack padding="10px" gap="25px">
            <Stack padding="10px">{icon}</Stack>
            <Stack>
              <Stack sx={{ fontWeight: "bold", fontSize: "22px" }}>
                {textBold}
              </Stack>
              <Stack>{text}</Stack>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default Choose;
