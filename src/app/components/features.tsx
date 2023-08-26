"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { GiCarWheel } from "react-icons/gi";
import { MdTireRepair } from "react-icons/md";
import { PiEngineDuotone } from "react-icons/pi";

import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container minH="100vh" maxW={"7xl"} py={12} display="flex" alignItems="center">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Services
          </Text>
          <Heading>A digital Product design agency</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            With over 10000 items in stock at all times we cater for almost every tyre requirement
          </Text>
          <Stack spacing={4} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
            <Feature
              icon={<Icon as={BsGear} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Vehicle Inspection & Servicing"}
            />
            <Feature
              icon={<Icon as={MdTireRepair} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Brakes and Clutches"}
            />
            <Feature
              icon={<Icon as={PiEngineDuotone} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Engine Parts and Batteries"}
            />
            <Feature
              icon={<Icon as={GiCarWheel} color={"orange.500"} w={5} h={5} />}
              iconBg={useColorModeValue("orange.100", "orange.900")}
              text={"Tires and Rims"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image rounded={"md"} alt={"feature image"} src={"images/features.jpg"} objectFit={"cover"} />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
