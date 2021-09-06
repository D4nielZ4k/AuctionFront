import { Button, Input, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

type FormValues = {
  offerPrice: string;
  dataOfferCreated: string;
  dateCreated: string;
  productId: string;
  dataOfferDue: string;
};

function isValidHttpUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function AddOffer() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    const url = "http://localhost:8080/v1";

    fetch(`${url}/offer/addOffer`, {
      method: "POST",

      body: JSON.stringify({
        id: 0,
        offerPrice: data.offerPrice,
        dataOfferCreated: null,
        productId: data.productId,
        dataOfferDue: null,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Text align={"center"} mb={10} fontSize="4xl">
          addOffer
        </Text>
        <Input
          mb={5}
          {...register("offerPrice")}
          type="number"
          placeholder="Price"
        />
        <Input
          mb={5}
          {...register("productId")}
          type="number"
          placeholder="product id"
        />

        <Button mb={5} type="submit" colorScheme="blue">
          Add offer
        </Button>
      </form>
    </div>
  );
}

export default AddOffer;
