import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import { ModuleResolutionKind } from "typescript";
import moment from "moment";
import styles from "./AddOffer.module.css";
type FormValues = {
  name: string;
  author: string;
  yearOfProduction: number;
  description: string;
  url: string;
  offerPrice: number;
  dataOfferDue: string;
  //dataOfferDue
  //isSold
  sellerId: number;
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
  const { register, handleSubmit, watch, control } = useForm<FormValues>();

  const url_image = watch("url");

  const onSubmit = handleSubmit((data) => {
    const url = "http://localhost:8080/v1";

    fetch(`${url}/offer/addOffer`, {
      method: "POST",

      body: JSON.stringify({
        id: 0,
        name: data.name,
        author: data.author,
        yearOfProduction: data.yearOfProduction,
        description: data.description,
        url: data.url,
        offerPrice: data.offerPrice,
        sellerId: data.sellerId,
        dataOfferDue: data.dataOfferDue,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  });

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        {isValidHttpUrl(url_image) && (
          <Flex w="100%" justifyContent="center">
            <Image p={5} src={url_image} width={400} />
          </Flex>
        )}
        <Input mb={5} {...register("url")} variant="filled" placeholder="url" />
        <Input mb={5} {...register("name")} placeholder="name" />
        <Input mb={5} {...register("author")} type="" placeholder="author" />
        <Input
          mb={5}
          {...register("yearOfProduction")}
          type="number"
          placeholder="yearOfProduction"
        />
        <Input
          mb={5}
          {...register("description")}
          type=""
          placeholder="description"
        />

        <Input
          mb={5}
          {...register("offerPrice")}
          type="number"
          placeholder="offerPrice"
        />

        <Controller
          control={control}
          name="dataOfferDue"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              onChange={onChange}
              onBlur={onBlur}
              selected={moment(value).toDate()}
            />
          )}
        />

        <Input
          mb={5}
          {...register("sellerId")}
          type="number"
          placeholder="sellerId"
        />
        <Button mb={5} type="submit" colorScheme="blue">
          Add offer
        </Button>
      </form>
    </div>
  );
}

export default AddOffer;
