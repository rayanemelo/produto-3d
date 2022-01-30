import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, HStack, Link, Heading } from '@chakra-ui/react';

const Layout = ({ children }) => {
  const [active, setActive] = useState("home");

  return (
    <Box>
      <HStack 
        h={20}
        justifyContent="space-around"
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg="gray.800"
        color="gray.50"
        borderBottom="2px"
        borderColor="cyan.600"
        shadow="lg"

      >
        <Heading>Produto 3D</Heading>
        <HStack spacing={12}>
          <Link 
            as={RouterLink} 
            to="/" 
            fontSize="lg"
            fontWeight="bold"
            borderBottom={active === "home" ? "2px" : "none"}
            borderColor="cyan.600"
            _hover={{
              textDecoration: "none",
            }}
            _active={{
              textDecoration: "none",
            }}
            _focus={{
              textDecoration: "none",
              outline: "none"
            }}
            onClick={() => setActive("home")}
          >
            Home
          </Link>
          <Link 
            as={RouterLink} 
            to="/produtos" 
            fontSize="lg"
            fontWeight="bold"
            borderBottom={active === "produtos" ? "2px" : "none"}
            borderColor="cyan.600"
            _hover={{
              textDecoration: "none",
            }}
            _active={{
              textDecoration: "none",
            }}
            _focus={{
              textDecoration: "none",
              outline: "none"
            }}
            onClick={() => setActive("produtos")}
          >
            Produtos
          </Link>
          <Link 
            as={RouterLink} 
            to="/contato"
            fontSize="lg"
            fontWeight="bold"
            borderBottom={active === "contato" ? "2px" : "none"}
            borderColor="cyan.600"
            _hover={{
              textDecoration: "none",
            }}
            _active={{
              textDecoration: "none",
            }}
            _focus={{
              textDecoration: "none",
              outline: "none"
            }}
            onClick={() => setActive("contato")}
          >
            Contato
          </Link>
        </HStack>
      </HStack>
      <Box h="100%" bg="gray.50" p={10} mt={20}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout;