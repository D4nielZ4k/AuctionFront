import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "../../components/DatePicker/DatePicker";
import { ModuleResolutionKind } from "typescript";
import moment from "moment";
import styles from "./AddOffer.module.css";
type FormValues = {
  userName: string;
  password: string;
};

function SigIn() {
  const { register, handleSubmit, watch, control } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    const url = "http://localhost:8080";

    fetch(`${url}/login`, {
      method: "POST",

      body: JSON.stringify({
        id: 0,
        userName: data.userName,
        password: data.password,
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
        <Input mb={5} {...register("userName")} placeholder="userName" />
        <Input
          mb={5}
          {...register("password")}
          type=""
          placeholder="password"
        />

        <Button mb={5} type="submit" colorScheme="blue">
          LogIn
        </Button>
      </form>
    </div>
  );
}

export default SigIn;
