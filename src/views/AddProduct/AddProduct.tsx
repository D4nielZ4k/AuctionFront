import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { DatePicker } from "../../components/DatePicker/DatePicker";

function AddProduct() {
  return (
    <div>
      <Input placeholder="name" />
      <Input type="" placeholder="author" />
      <DatePicker onChange={(name) => console.log(name)} />
      <Input name="url" variant="filled" placeholder="url" />
      <Input name="sellerId" type="number" placeholder="sellerId" />

      <Button colorScheme="blue">Add product</Button>
    </div>
  );
}

export default AddProduct;
