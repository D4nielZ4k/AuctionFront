import { Box, ListItem, Stack, UnorderedList } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import Offer from "../../components/Offer/Offer";

function Offers() {
  const [data, setData] = useState({ error: null, isLoaded: false, data: [] });
  useEffect(() => {
    const url = "http://localhost:8080/v1";

    fetch(`${url}/offer/getOffers`) //fetch zwraca obietnice oczekuje na to ze cos wzruci czyli then ...
      .then((res) => res.json())
      .then((result) => {
        setData({
          error: null,
          isLoaded: true,
          data: result.map((item: any) => ({
            title: item.name,
            desc: item.author,
            src: item.url,
            description: item.description,
            offerPrice: item.offerPrice,
          })),
        });
      }); //cwany zapis

    console.log("no co majser");
  }, []);
  return (
    <>
      <Box w="500px">
        <Stack spacing={8}>
          {data.data.length > 0 &&
            data.data.map(
              (
                item: {
                  title: string;
                  desc: string;
                  src: string;
                  description: string;
                  offerPrice: number;
                },
                index
              ) => <Offer key={index} {...item} />
            )}
        </Stack>
      </Box>
    </>
  );
}

export default Offers;
