import { SimpleGrid, Box, Image, Container, Text, Heading, Button, Flex } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import Link from "next/link";
import DefaultHeader from "../header/page";
import DefaultFooter from "../footer/page";

import products, { Product } from "@/data/products"; 


export default async function ProductDetailPage ({
  params,
}: {
  params: Promise<{ id: string }>;
}) 
{
  const { id } = await params;
  // const product = products.find((p) => p.id === id);
  const product: Product = products.find((p) => p.id === id)!;

  if (!product) return notFound();

  return (
    <Container> 
      <DefaultHeader />
    <SimpleGrid
      w="98%"
      rounded="md"
      p={{ base: "2px", md: "0.5rem" }}
      m={1}
      columns={{ base: 1, md: 2 }}
      columnGap={{ base: "0.3em", md: "0.5em" }}
      rowGap={{ base: "0.3em", md: "0.5em" }}
    >
      <Box>
        <Image src={`/images/${product.image}`} alt="Product Image" />
      </Box>

      <Box p={{ base: "0.3rem", md: "0.5rem" }}>
        <Heading mb={2} >{product.name}</Heading>
        <Text mb={4} >{product.description}</Text>
        
        <Text mb={4} style={{fontSize: "2em", color: "blue", fontWeight: "bold", textAlign: "center" }} >
          Ksh {product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) } 
        </Text>

        

        <Flex justifyContent="center" mb={4}>
          <Link href={`/`} passHref>
            <Button px={2} >
              Back
            </Button>
          </Link>
        </Flex>

      </Box>

    </SimpleGrid>

    <DefaultFooter/>
    </Container>
  );
}
