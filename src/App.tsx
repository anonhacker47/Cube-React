import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { customers } from "./data/CustomerData";
import CustomerCard from "./components/CustomerCard";
import { Customer } from "./types/Customer";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(customers[0]);

  return (
    <div className="app">
      <div className="sidebar">
        {customers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} onSelectCustomer={setSelectedCustomer} isSelected={customer.id === selectedCustomer?.id} />
        ))}
      </div>
      <div className="content">
      {selectedCustomer && <CustomerDetails selectedCustomer={selectedCustomer}  />}
      </div>
    </div>
  );
}

export default App;
