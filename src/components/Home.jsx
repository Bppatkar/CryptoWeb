import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"#718096"} w={"full"} h={"87vh"}>
      <motion.div
        style={{
          height: "59vh",
          boxShadow: "none",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#FFD700"}
        // mt={"-20"}
      >
        Ethereum Vector Mining By Bhanu
      </Text>
    </Box>
  );
};

export default Home;
