"use client";

import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={6} w="full" maxW="lg">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as="span"
              position="relative"
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              SA WHEELS
            </Text>
            <br />
            <Text color="blue.400" as="span">
              Vehicle service
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color="gray.500">
            Precision in Motion: Expert Wheel Alignment and Tire Change Services for a Smoother Ride
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded="full"
              bg="blue.400"
              color="white"
              _hover={{
                bg: "blue.500",
              }}
            >
              Create Project
            </Button>
            <Button rounded="full">How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} bg="black">
        <Image alt="Login Image" objectFit="contain" src="images/hero.png" />
      </Flex>
    </Stack>
  );
}
