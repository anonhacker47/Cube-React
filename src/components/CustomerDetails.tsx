import React from "react";
import { Customer } from "../types/Customer";
import ImageGrid from "./ImageGrid";

export interface CustomerDetailProps {
  selectedCustomer: Customer;
}

export default function CustomerDetails(props: CustomerDetailProps) {
  return (
    <div className="customer-details">
      <h2>{props.selectedCustomer.name}</h2>
      <h4>{props.selectedCustomer.title}</h4>
      <p>{props.selectedCustomer.address}</p>
      <ImageGrid selectedCustomer={props.selectedCustomer}/>
    </div>
  );
}
