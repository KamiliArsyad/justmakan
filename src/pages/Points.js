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

export default function Points() {
  return (
    <>
      <Stack direction="column" spacing={-5} align="center">
        <Container bg="green.400" minH="160" align="left">
          <Stack direction="row" spacing={10} margin="5" align="left">
            <Stack direction="column" spacing={-2} align="left">
              <Heading as="h3" color="gray.100">
                hello,
              </Heading>
              <Heading size="4xl" color="white">
                Jason
              </Heading>
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
          <Card>
            <CardHeader>
              <Heading size="lg" color="gray.400">
                My Points
              </Heading>
            </CardHeader>

            <CardBody>
              <Stack direction="row" align="center">
                <Box>
                  <Text as='h5' color="gray.300">
                    My Points
                  </Text>
                  <Heading size="xl" color="black">
                    1200
                  </Heading>
                </Box>
                <Box>
                  <Text as='h5' color="gray.300">
                    My Rewards 
                  </Text>
                  <Heading size="xl" color="black">
                    5
                  </Heading>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </Stack>
    </>
  );
}
