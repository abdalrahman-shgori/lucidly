import React, { useState } from "react";
import './landing.css';
import Logo from "../../assets/images/logo.svg"
import { Button, ChakraProvider, extendTheme, useDisclosure } from "@chakra-ui/react";
import CustomModal from "../modal/modal";
interface LandingProps { }
const theme = extendTheme({
  colors: {
    custom: {
      500: "#FF8C1E",
    },
    disapled: {
      500: "#B3B3B3  "
    }
  },
});

const Landing: React.FC<LandingProps> = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <ChakraProvider theme={theme}>
      <div className="bg">
        <div className="center">
          <img src={Logo} alt="Logo" />
          <CustomModal />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Landing;