import React from "react";
import {Customer} from "../types/Customer"

export interface CustomerCardProps {    
    customer: Customer
    onSelectCustomer: (customer: Customer) => void
    isSelected: boolean
}

export default function CustomerCard(props:CustomerCardProps) {
    return (
        <div className={`customer-card { ${props.isSelected ? "card-selected" : ""}`} onClick={() => props.onSelectCustomer(props.customer)}>
            <h2 className="card-title">{props.customer.name}</h2>
            <p className="card-text">{props.customer.title}</p> 
        </div>
    );
}