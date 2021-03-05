import React from "react";
import { InforAddress } from "./information-address";

export const dataSteps = [
  {
    stepId: 1,
    name: "Delivery Address",
    button: "+ Add Address",
    infor: [
      {
        id: 1,
        name: "Home",
        detail: "27 Street, 2569 Heritage Road Visalia, CA 93291",
      },
      {
        id: 2,
        name: "Office",
        detail: "33 Baker Street, Crescent Road, CA 65746",
      },
      {
        id: 3,
        name: "Home 2",
        detail: "423 Mikasa Street, Crostina Eren, BA 123456",
      },
    ],
  },
  {
    stepId: 2,
    name: "Delivery Schedule",
    button: "",
    infor: [
      { id: 1, name: "Express-Delivery", detail: "90 min express delivery" },
      { id: 2, name: "8am-11am", detail: "8.00 AM - 11.00 AM" },
      { id: 3, name: "11am-2pm", detail: "11.00 AM - 2.00 PM" },
      { id: 4, name: "2pm-5pm", detail: "2.00 PM - 5.00 PM" },
      { id: 5, name: "5pm-8pm", detail: "5.00 PM - 8.00 PM" },
      { id: 6, name: "Next Day", detail: "Next Day" },
    ],
  },
  {
    stepId: 3,
    name: "Contact Number",
    button: "+ Add Contact",
    infor: [
      { id: 1, name: "Primary", detail: "202-555-0191" },
      { id: 2, name: "Secondary", detail: "202-555-0701" },
    ],
  },
  {
    stepId: 4,
    name: "Payment Option",
    button: "+ Add Card Number",
    infor: [
      { id: 1, name: "VietBank", detail: "**** **** **** 1234" },
      { id: 2, name: "Sacombank", detail: "**** **** **** 4321" },
    ],
  },
];

export const Informations = () => {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        margin: "8px",
        maxWidth: "723px",
      }}
    >
      {dataSteps.map((el) => {
        return <InforAddress props={el} />;
      })}
    </div>
  );
};
