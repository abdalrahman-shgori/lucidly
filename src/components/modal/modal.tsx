import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Box,
  Text,
  Flex,
  Select,
} from '@chakra-ui/react';
import Pen from "../../assets/images/PenIcon.svg"
import { EditablePreview, useColorModeValue, IconButton, Input, useDisclosure, useEditableControls, ButtonGroup, SlideFade, Editable, Tooltip, EditableInput } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { useRecoilState } from 'recoil';
import { myState } from '../../mystate';
import { useToast } from '@chakra-ui/react'
import Third from "./third";
import Sumbitted from "./submitted";
import Second from "./second";

function CustomModal(): JSX.Element {

  function EditableControls(): JSX.Element {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton
          icon={<CheckIcon />}
          aria-label="Submit" // Provide an appropriate label here
          {...getSubmitButtonProps()}
        />
        <IconButton
          icon={<CloseIcon />}
          aria-label="Cancel" // Provide an appropriate label here
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='end' position="absolute" top="36%" right="10%">
        {/* <IconButton size='sm' icon={Pen} {...getEditButtonProps()} /> */}
        <img src={Pen} {...getEditButtonProps()}></img>
      </Flex>
    )
  }
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [recoilState, setRecoilState] = useRecoilState(myState);
  const [activeIndices, setActiveIndices] = useState<number[]>([0]);
  const [value, setValue] = useState<number>(0)
  const handleNameChange = (newValue: string): void => {
    setRecoilState((prevRecoilState) => ({
      ...prevRecoilState,
      name: newValue,
    }));
  };
  const HandlerBack = (): void => {
    setValue((prevValue) => (prevValue - 1 + 3) % 3);
    setActiveIndices((prevActiveIndices) => {
      const newActiveIndices = [...prevActiveIndices];
      const lastActiveIndex = newActiveIndices.pop();
      if (lastActiveIndex !== undefined) {
        const nextIndex = (lastActiveIndex - 1 + 3) % 3;  
        if (!newActiveIndices.includes(nextIndex)) {
          newActiveIndices.push(nextIndex);
        }  
        if (newActiveIndices.length > 3) {
          newActiveIndices.shift();
        }
      }
  
      return newActiveIndices;
    });
  };
  
  const handlerNext = (): void => {
    if (recoilState.name === "" && value === 0) {
      toast({
        title: "please Select Name",
        status: "error",
        position: "top-right"
      })
    }
    else if (recoilState.selectedLanguage === "" && value === 1) {
      toast({
        title: "Please Select Language",
        status: "error",
        position: "top-right"
      })
    }
    else if (recoilState.selectedCountry === "" && value === 1) {
      toast({
        title: "Please Select Country",
        status: "error",
        position: "top-right"
      })

    }


    else {
      
      setValue(value + 1)
      const newActiveIndices = [...activeIndices];

      // Calculate the next index
      const lastActiveIndex = newActiveIndices[newActiveIndices.length - 1];
      const nextIndex = (lastActiveIndex + 1) ;

      // If the next index is not in the active indices, add it
      if (!newActiveIndices.includes(nextIndex)) {
        newActiveIndices.push(nextIndex);
      }

      // If there are more than 2 active indices, remove the first one
      if (newActiveIndices.length > 4) {
        newActiveIndices.shift();
      }

      // Update the state with the new active indices
      setActiveIndices(newActiveIndices)

    }


  }
  const handleModalClose = () => {
  };
  const boxStyles = {
    background: "#434E61",
    height: "5px",
    width: "5px",
    borderRadius: "50px",
  };
  const repeatCount = 3;
  const boxes: JSX.Element[] = [];  for (let i = 0; i < repeatCount; i++) {
    boxes.push(<Box key={i} style={boxStyles}></Box>);
  }
  console.log("data saved in the state managment", recoilState)
  return (
    <>
      <Button
        onClick={onOpen}
        fontSize="14px"
        width={['60%', '20%']}

        colorScheme="custom"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.4)"
        textShadow="0px 0px 4px black"
      >
        OPEN MODEL
      </Button>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent
          position="absolute"
          minHeight={['512px','612px']}
          maxWidth={['80%', '600px']}
        >
          {value === 0 && (
            <>
              <ModalHeader
                marginTop="40px"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  gap="12px"
                >
                  <Box
                    background="#434E61"
                    width="123px"
                    borderRadius="8px"
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    height="123px"


                  >
                    <Text
                      fontSize="50px"
                      color="#FFFFFF"
                    >
                      A
                    </Text>

                  </Box>
                  <Text
                    fontSize="14"
                    fontFamily="Poppins"
                    color="#B3B3B3"
                  >
                    alice@wonderland.space
                  </Text>
                </Box>
              </ModalHeader>
              <ModalBody
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                {/* Add your modal content here */}
                <Text
                  fontSize="28px"
                  color="#434E61"
                  fontFamily="Poppins"
                  fontWeight="bold"
                >
                  Welcome to Giki
                </Text>
                <Box
                  background="#F6F6F6"
                  width="244px"
                  borderRadius="8px"
                >
                  <Editable
                    textAlign='center'
                    defaultValue={recoilState.name || 'Name'}
                    color="#FF8C1E"
                    fontSize='28px'
                    fontFamily="Roboto"
                    fontWeight="bold"
                    isPreviewFocusable={false}
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    onChange={handleNameChange}


                  >

                    <EditablePreview />

                    {/* Here is the custom input */}
                    <Input as={EditableInput} />
                    <EditableControls />

                  </Editable>


                </Box>
                <Text
                  width="70%"
                  fontSize="13px"
                  color="#262626"
                  fontFamily="Poppins"
                  marginTop="20px"
                  textAlign="center"
                >
                  Your answers to the next few questions will help us find the right communities for you
                </Text>

                <Button

                  onClick={handlerNext}
                  fontSize="14px"
                  width="244px"
                  height="41px"
                  marginTop="20px"


                  colorScheme="custom" // Use your custom color scheme
                >
                  Next
                </Button>
              </ModalBody>


            </>
          )}
          {value === 1 && (
            <Second Next={handlerNext} Back={HandlerBack} />
          )}
          {value === 2 && (
            <>
              <Third Back={HandlerBack} Next={handlerNext} />
            </>
          )}
          {value === 3 && (
            <Sumbitted onClose={onClose} />
          )}
          <ModalFooter
            display="flex"
            justifyContent="center"
            marginTop="50px"
            marginBottom="10px"
          >
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <Box
                  key={index}
                  background={
                    activeIndices.includes(index) ? "#FF8C1E" : "black"
                  }
                  height="5px"
                  width="5px"
                  borderRadius="50px"
                  marginLeft="10px"
                />
              ))}
            </>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CustomModal;