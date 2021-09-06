import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import moment from "moment";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import styles from "./AddProduct.module.css";

type FormValues = {
  name: string;
  author: string;
  dateCreated: string;
  url: string;
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

function AddProduct() {
  const { register, handleSubmit, control, watch } = useForm<FormValues>();

  const url_image = watch("url");

  const onSubmit = handleSubmit((data) => {
    const url = "http://localhost:8080/v1";

    fetch(`${url}/product/addProduct`, {
      method: "POST",

      body: JSON.stringify({
        id: 0,
        name: data.name,
        author: data.author,
        dateCreated: data.dateCreated,
        url: data.url,
        sellerId: data.sellerId,
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
        <Text align={"center"} mb={10} fontSize="4xl">
          add
        </Text>
        <Input mb={5} {...register("name")} placeholder="name" />
        <Input mb={5} {...register("author")} type="" placeholder="author" />
        <Controller
          control={control}
          name="dateCreated"
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              onChange={onChange}
              onBlur={onBlur}
              selected={moment(value).toDate()}
            />
          )}
        />
        {isValidHttpUrl(url_image) && (
          <Flex w="100%" justifyContent="center">
            <Image p={5} src={url_image} width={400} />
          </Flex>
        )}
        <Input mb={5} {...register("url")} variant="filled" placeholder="url" />
        <Input
          mb={5}
          {...register("sellerId")}
          type="number"
          placeholder="sellerId"
        />
        <Button mb={5} type="submit" colorScheme="blue">
          Add product
        </Button>
      </form>
    </div>
  );
}

export default AddProduct;
