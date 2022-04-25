import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import PhoneCall from "../assets/img/food1.avif";

const Contact = () => {
  return (
    <Box h={"100%"}>
      <VStack
        w={"100%"}
        h={"50vh"}
        align="center"
        justify="center"
        sx={{
          backgroundImage: `url(${PhoneCall})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          position: "relative",
        }}
        _after={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          opacity: 0.28,
        }}
      >
        <Text
          fontSize={"40px"}
          fontWeight={"600"}
          letterSpacing={"wide"}
          color={"white"}
        >
          GET IN TOUCH
        </Text>
        <Text
          border="2px solid black"
          fontSize={"16px"}
          fontWeight={"400"}
          letterSpacing={"wide"}
          color={"white"}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
          facilis impedit expedita sint adipisci distinctio omnis quia
          temporibus laboriosam quae provident, nam aliquam accusantium vel
          perspiciatis eaque dolore cum consequuntur?
        </Text>
      </VStack>
    </Box>
  );
};

export default Contact;
