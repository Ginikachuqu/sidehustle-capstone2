import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  // Hooks
  const navigate = useNavigate();

  // Functions
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box
      w={"100%"}
      height={"95vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="100px" pb={10} fontWeight="bolder" color="red">
        Error 404
      </Text>
      <Text fontSize="60px" pb={10} fontWeight="bold">
        Not Found
      </Text>
      <Button
        color={"white"}
        onClick={handleClick}
        w={"10%"}
        bgImage={"linear-gradient(to right, #0D7BC8, #03B8E8)"}
        transition={"ease-in-out all .2s"}
        borderRadius="3rem"
        _hover={{
          bgImage: "linear-gradient(to right, #0D7BC8, #03B8E8)",
          transform: "scale(.97)",
        }}
        _focus={{
          border: "none",
          bgImage: "linear-gradient(to right, #0D7BC8, #03B8E8)",
        }}
        _active={{
          border: "none",
          bgImage: "linear-gradient(to right, #0D7BC8, #03B8E8)",
        }}
      >
        Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
