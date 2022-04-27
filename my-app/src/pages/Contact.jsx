import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import PhoneCall from "../assets/img/restaurant.avif";
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsGlobe, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";

const Contact = () => {
  return (
    <Box h={"100%"} position="relative">
      <VStack
        w={"100%"}
        h={"50vh"}
        position="relative"
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
          opacity: 0.38,
        }}
      />

      <VStack
        w={"100%"}
        h={"70vh"}
        align="center"
        justify="center"
        _after={{
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          opacity: 0.38,
        }}
      />

      {/* Position Absolute */}

      <Box
        width="70%"
        position="absolute"
        top={"280px"}
        left={"300px"}
        backgroundColor="white"
        display="flex"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        borderRadius=".35rem"
        sx={{
          "@media (max-width:1350px)": {
            position: "relative",
            top: "0px",
            left: "0px",
            width: "100%",
            flexDirection: "column",
            gap: 4,
          },
        }}
      >
        <VStack
          w={"75%"}
          align="flex-start"
          pl={18}
          p={10}
          sx={{
            "@media (max-width:1350px)": {
              w: "100%",
              align: "center",
            },
          }}
        >
          <Text
            fontSize={"20px"}
            mb={8}
            fontWeight={"700"}
            letterSpacing={"wide"}
            zIndex={2}
            color={"#04A5E1"}
          >
            Drop a Message
          </Text>

          <HStack
            w={"100%"}
            pb={10}
            gap={5}
            sx={{
              "@media (max-width:992px)": {
                w: "100%",
                flexDirection: "column",
                gap: 10,
              },
            }}
          >
            <FormControl
              w={"50%"}
              variant={"flushed"}
              sx={{
                "@media (max-width:1350px)": {
                  w: "100%",
                },
              }}
            >
              <FormLabel
                htmlFor="name"
                fontWeight={500}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                Full Name:
              </FormLabel>
              <Input
                id="name"
                type="text"
                px={2}
                placeholder="Enter Your Name"
                size={"md"}
                variant={"flushed"}
                _placeholder={{ fontSize: ".8rem" }}
              />
            </FormControl>

            <FormControl
              w={"50%"}
              sx={{
                "@media (max-width:1350px)": {
                  w: "100%",
                },
              }}
            >
              <FormLabel
                htmlFor="number"
                fontWeight={500}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                Phone Number:
              </FormLabel>
              <Input
                id="number"
                type="number"
                placeholder="+234 ..."
                size={"md"}
                variant={"flushed"}
                px={2}
                _placeholder={{ fontSize: ".8rem" }}
              />
            </FormControl>
          </HStack>

          <HStack
            w={"100%"}
            pb={10}
            gap={5}
            sx={{
              "@media (max-width:992px)": {
                w: "100%",
                flexDirection: "column",
                gap: 10,
              },
            }}
          >
            <FormControl
              w={"50%"}
              variant={"flushed"}
              sx={{
                "@media (max-width:1350px)": {
                  w: "100%",
                },
              }}
            >
              <FormLabel
                htmlFor="email"
                fontWeight={500}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                Email:
              </FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                size={"md"}
                variant={"flushed"}
                _placeholder={{ fontSize: ".8rem" }}
              />
            </FormControl>

            <FormControl
              w={"50%"}
              sx={{
                "@media (max-width:1350px)": {
                  w: "100%",
                },
              }}
            >
              <FormLabel
                htmlFor="text"
                fontWeight={500}
                fontSize={"12px"}
                lineHeight={"18px"}
              >
                Subject:
              </FormLabel>
              <Input
                id="text"
                type="text"
                placeholder="Service..."
                size={"md"}
                variant={"flushed"}
                _placeholder={{ fontSize: ".8rem" }}
              />
            </FormControl>
          </HStack>

          <FormControl pb={5}>
            <FormLabel
              fontFamily={"poppins"}
              fontWeight={600}
              fontSize={"14px"}
              lineHeight={"24px"}
            >
              Message
            </FormLabel>
            <Textarea
              placeholder="Compose message"
              size={"md"}
              h={"130px"}
              resize={"none"}
              variant={"outline"}
              _placeholder={{ fontSize: ".7rem" }}
              _focus={{
                border: "1px solid grey",
              }}
            />
          </FormControl>

          <Button
            color={"white"}
            bgImage={"linear-gradient(to right, #0D7BC8, #03B8E8)"}
            transition={"ease-in-out all .2s"}
            px={7}
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
            Send Message
          </Button>
        </VStack>

        <VStack
          align="flex-start"
          pl={18}
          p={10}
          bgImage={"linear-gradient(to right, #0FA671, #30A03C)"}
          w={"40%"}
          borderRadius=".35rem"
          borderTopLeftRadius={"none"}
          borderBottomLeftRadius={"none"}
          sx={{
            "@media (max-width:1350px)": {
              w: "100%",
              borderRadius: "none",
              justify: "center",
              align: "center",
            },
          }}
        >
          <Text
            fontSize={"20px"}
            mb={8}
            fontWeight={"700"}
            letterSpacing={"wide"}
            zIndex={2}
            color={"#fff"}
          >
            Contact Information
          </Text>

          <Flex align="center" pb={8} color={"#fff"}>
            <GoLocation size={"20px"} />
            <Text
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"24px"}
              textTransform={"capitalize"}
              ml={2}
            >
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                }}
              >
                24 Magaret Avenue. Enugu Nigeria
              </Link>
            </Text>
          </Flex>

          <Flex align="center" pb={8} color={"#fff"}>
            <BsTelephone size={"20px"} />
            <Text
              fontWeight={400}
              fontSize={"1rem"}
              lineHeight={"24px"}
              textTransform={"capitalize"}
              ml={2}
            >
              <Link
                href="tel:+2349033045078"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                }}
              >
                09033045078
              </Link>
            </Text>
          </Flex>

          <Flex align="center" pb={8} color={"#fff"}>
            <HiOutlineMail size={"20px"} />
            <Text fontWeight={400} fontSize={"1rem"} lineHeight={"24px"} ml={2}>
              <Link
                href="mailto:NtachiOsa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                }}
                _focus={{ border: "none" }}
              >
                NtachiOsa@gmail.com
              </Link>
            </Text>
          </Flex>

          <Flex align="center" pb={8} color={"#fff"}>
            <BsGlobe size={"20px"} />
            <Text fontWeight={400} fontSize={"1rem"} lineHeight={"24px"} ml={2}>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{
                  textDecoration: "none",
                }}
              >
                www.ntachi.com
              </Link>
            </Text>
          </Flex>

          <HStack w={"100%"} gap={5} pt={10}>
            <Center p={1} bgColor={"white"}>
              <FaFacebookF size={"15px"} />
            </Center>

            <Center>
              <BsTwitter color="white" size={"20px"} />
            </Center>

            <Center>
              <IoLogoYoutube color="#fff" size={"30px"} />
            </Center>

            <Center>
              <ImLinkedin color="#fff" size={"25px"} />
            </Center>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Contact;
