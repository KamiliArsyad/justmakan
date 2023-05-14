import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import ExploreCard from "../components/Explore/ExploreCard";

import { recommendationCard, nearbyCards } from "../constants";

export default function Explore() {
  return (
    <>
      <Stack direction="column" spacing={-5} align="center">
        <Container bg="brand.100" minH="160" align="left" minWidth='full'>
          <Stack direction="row" spacing={10} margin="5" align="left">
            <Stack direction="column" align="left" mb="7">
              <Heading size="xl" color="gray.100" mt="5">
                Explore
              </Heading>
              <Text size="md" w="60%" color="white" lineHeight="120%">
                Have a taste of sustainably-sourced food
              </Text>
            </Stack>
          </Stack>
        </Container>
        <Box
          boxShadow="dark-lg"
          rounded="md"
          w="95%"
          bg="white"
          h='500'
          align="center"
        >
          <Card p="2">
            <CardHeader align="left">
              <Heading size="lg">Just For You</Heading>
            </CardHeader>
            <ExploreCard data={recommendationCard} />
            <CardHeader align="left">
              <Heading size="lg">Nearby</Heading>
            </CardHeader>
            {nearbyCards.map((item) => {
                return <ExploreCard data={item} />
            })}
          </Card>
        </Box>
      </Stack>
    </>
  );
}
