"use client"

import products from "@/data/products";
import DefaultHeader from "./header/page";
import DefaultFooter from "./footer/page";

import Link from "next/link";
import { Button, Container, Card, Image, Text, SimpleGrid, ClientOnly, Skeleton } from "@chakra-ui/react"
import { useColorModeValue } from "@/components/ui/color-mode"


export default function Demo()
{
    const priceColor = useColorModeValue("navy", "yellow");
    const cartButtonColor = useColorModeValue("green", "lightblue");

    return (
        <Container>  
            <DefaultHeader />            

        <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
        rowGap={{ base: "0.5rem", sm: "0.5rem", md: "1rem" }}
        columnGap={{ base: "0.5rem", sm: "0.5rem", md: "1rem" }}
        m={{ base: "0.2rem", sm: "0.2rem", md: "0.4rem" }}
        >

            {products.map( (product) => (

                <Card.Root key={product.id} overflow="hidden" 
                p={{ base: "2px", sm: "2px", md: "0.5rem" }}                 
                >

                <Link href={`/${product.id}`} passHref>
                    <Image  onTouchStart={() => console.log("Touched!")}
                        fontSize={{ base: "xs", sm: "sm", md: "md" }}             
                        src={`/images/${product.image}`}
                        alt={`/images/${product.name}`}
                        pb={{ base: "2px", sm: "2px", md: "0.5rem"  }}
                        rounded="md"
                        cursor="pointer"
                        _hover={{ opacity: 0.85 }}
                    />
                
                

                    <Card.Body >

                        <Card.Title fontSize={{ base: "xs", sm: "sm", md: "md" }} 
                        lineHeight={{ base: "1rem", sm: "1rem", md: "1rem" }}
                        >{product.name}</Card.Title>  

                        <Card.Description>{product.description}</Card.Description>    

                        <ClientOnly fallback={<Skeleton boxSize={{ base: "1rem", sm: "1rem", md: "2rem" }} />}>
                            <Text fontWeight="bold" color={priceColor} 
                            fontSize={{ base: "xs", sm: "sm", md: "md" }} 
                            textAlign="center"
                            >
                                KES {product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }
                            </Text>   
                        </ClientOnly>                 

                    </Card.Body>
                </Link>

               


                <Card.Footer justifyContent="flex-end" mr={{ base: "4px", sm: "4px", md: "1rem" }} >   

                     
                    <Link href={`/${product.id}`} passHref>
                        <ClientOnly fallback={<Skeleton boxSize={{ base: "1rem", sm: "1rem", md: "2rem" }} />}>           
                            <Button bg={cartButtonColor} p={{ base: "2px", sm: "2px", md: "0.5rem"  }} >
                                View
                            </Button> 
                        </ClientOnly>
                    </Link>
                    

                </Card.Footer>

                </Card.Root>

            ))}            

        </SimpleGrid>

        <DefaultFooter />

        </Container>
    )
}


