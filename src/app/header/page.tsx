import { Box, Heading } from "@chakra-ui/react"


const DefaultHeader = () => {
  return (
    <Box 
        py={{ base: "1rem", sm: "1rem", md: "2rem" }}
        px={{ base: "1rem", sm: "1rem", md: "2rem" }}

        >
            <Heading color="navy" textAlign="center" fontSize={{ base: "2rem", sm: "2rem", md: "3rem" }} >
                Timothy Mulei's Shop
            </Heading>
    </Box>
  )
}

export default DefaultHeader