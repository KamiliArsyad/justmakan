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

export default function Rewards() {
  return (
    <>
      <Stack direction="column" spacing={-4} align="center">
        <Container minH="160" bg="brand.400" align="left" minWidth="full">
          <Stack direction="row" spacing={10} marginTop="10" align="left">
            <Stack direction="column" spacing={1} align="left">
              <Heading size="xl" color="white">
                Rewards
              </Heading>
              <Text color="gray.200">Exchange points for rewards!</Text>
            </Stack>
          </Stack>
        </Container>
        <Box
          boxShadow="dark-lg"
          rounded="md"
          w="95%"
          bg="white"
          h="700"
          align="center"
        >
          <Stack spacing="5">
            <Card maxW="500" align='center'>
              <CardHeader>
                <Heading size="md" color="gray.400">
                  My Points
                </Heading>
              </CardHeader>

              <CardBody align="center">
                <Box>
                  <Heading size="3xl" color="black">
                    1200
                  </Heading>
                  <Text color="blue.500">redeem now</Text>
                </Box>
              </CardBody>
            </Card>
            <Card maxW="500">
              <CardHeader>
                <Heading size="lg" color="black">
                  Rewards
                </Heading>
              </CardHeader>
            </Card>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
