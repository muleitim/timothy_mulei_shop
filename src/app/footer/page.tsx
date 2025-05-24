"use client"

import { Box, Flex, VStack, HStack, Text, Icon, Separator } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const DefaultFooter = () => {
  return (
    <Box bg="gray.800" color="white" px={6} py={10} 
     mt={{ base: "1rem", sm: "1rem", md: "2rem" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        wrap="wrap"
      >
        {/* Column 1 */}
        <VStack align="flex-start" gap={4} mb={{ base: 8, md: 0 }}>
          <Text fontSize="xl" fontWeight="bold">Timothy's Shop</Text>
          <Text fontSize="sm">Your trusted go-to online store</Text>
          <HStack gap={4}>

            <a href="https://facebook.com" target="_blank" >
              <Icon as={FaFacebook} boxSize={5} />
            </a>

            <a href="https://twitter.com" target="_blank" >
              <Icon as={FaTwitter} boxSize={5} />
            </a>

            <a href="https://instagram.com" target="_blank">
              <Icon as={FaInstagram} boxSize={5} />
            </a>

          </HStack>
        </VStack>

        {/* Column 2 */}
        <VStack align="flex-start" gap={2}>
          <Text fontWeight="bold">Quick as</Text>
          <a style={{ textDecoration: "underline" }} href="https://muleitim.github.io/ui_design/">Tim's UI/UX Book</a>
          <a style={{ textDecoration: "underline" }} href="https://muleitim.github.io/landing_page_1/">Other Tim Designs</a> <br />

          <Text fontWeight="bold">Contacts</Text>
          <Text>
            <label>Email:</label>{" "}<label> <a style={{ textDecoration: "underline" }} href="mailto:muleitimothy508@gmail.com">muleitimothy508@gmail.com</a> </label> <br />
            <label>Phone:</label>{" "}<label> <a style={{ textDecoration: "underline" }} href="tel:+254748036314">0748036314</a> </label>
          </Text>
          


          
        </VStack>
      </Flex>

      <Separator my={6} color="gray.600" />
      <Text fontSize="sm" textAlign="center">
        &copy;2025 Timothy Mulei. All rights reserved.
      </Text>
    </Box>
  );
};

export default DefaultFooter;
