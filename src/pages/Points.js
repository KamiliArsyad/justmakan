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
      <Stack direction="column" spacing={-4} align="center">
        <Container bg="brand.100" minH="160" align="left" minWidth='full'>
          <Stack direction="row" spacing={10} margin="5" align="left">
            <Stack direction="column" align="left" mb="7">
              <Heading size="md" color="gray.100" mt="5">
                hello,
              </Heading>
              <Heading size="xl" w="60%" color="white" lineHeight="120%">
                Nancy
              </Heading>
              <br />
              <Text color="gray.200">Let's have clean plates today too!</Text>
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
          <Card maxW='500'>
            <CardHeader>
              <Heading size="xl" color="gray.400">
                My Points
              </Heading>
            </CardHeader>

            <CardBody align='center'>
              <Stack direction="row" align="center" justify='center' spacing='15'>
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
