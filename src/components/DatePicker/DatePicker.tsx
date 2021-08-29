import ReactDatePicker, { ReactDatePickerProps } from "react-datepicker";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";
export const DatePicker: React.FC<ReactDatePickerProps> = (props) => {
  return <ReactDatePicker {...props} />;
};
