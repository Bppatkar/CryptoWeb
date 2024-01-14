import React from "react";
import { Link } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";

function Header() {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"#FFD700"} fontSize={"xl"}>
      <Button fontSize={"xl"} variant={"unstyled"} color={"#718096"}>
        <Link to="/">Home</Link>
      </Button>
      <Button fontSize={"xl"} variant={"unstyled"} color={"#718096"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button fontSize={"xl"} variant={"unstyled"} color={"#718096"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
}

export default Header;
