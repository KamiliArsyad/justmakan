import React from "react";
import { Grid, GridItem, Image, Stack, Heading, Text } from "@chakra-ui/react";

const ExploreCard = (props) => {
  return (
    <>
      <Grid
        templateColumns="40% 1fr"
        gap="2"
        p="5"
        mx="4"
        bg={props.data.color}
        rounded="lg"
        mb="2"
      >
        <GridItem my='auto'>
          <Image src={props.data.image} />
        </GridItem>
        <GridItem>
          <Stack spacing={1}>
            <Heading color="white" size="lg" align="left" fontSize="20px"> 
              {props.data.title}
            </Heading>
            <Heading color="white" fontSize="13px" align="left">
              {props.data.store}
            </Heading>
            <Text color="white" fontSize="10px" lineHeight="100%" align="left">
              {props.data.description}
            </Text>
            <Heading color="white" fontSize="13px" align="left">
              {props.data.distance > 1000 ? props.data.distance / 1000 + " km" : props.data.distance + " m"}
            </Heading>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default ExploreCard;
