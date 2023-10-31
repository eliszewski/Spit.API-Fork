import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Account from './entity/interfaces';


function App() {
  const [entityId, setEntityId] = useState(1);
  const [accounts, setAccounts] = useState<Account[]>([]);

  const fetchAccounts = () => {
    axios.get("http://localhost:8080/account/all").then((res) => {
      setAccounts(res.data)
      console.log(res.data);
    }).catch((error) =>{
      console.log(error);
    })};

    const fetchAccount = (id : number) => {
      axios.get(`http://localhost:8080/account/${id}`).then((res) => {
        setAccounts(res.data)
        console.log(res.data);
      }).catch((error) =>{
        console.log(error);
      })};
    
    const mapAccount = (account : Account) => {
      return (
        <div key={account.account_id}>
          <p>ID: {account.account_id}</p>
          <p>Name: {account.name} </p>
          <p>Handle: {account.handle} </p>
          <p>----------------------</p>
        </div>
      )
    }
  return (
    <div>
      <button onClick={fetchAccounts}>Get All Accounts</button>
      <p>
      {accounts.map((account) => mapAccount(account))}
      </p>
      <button>Get Account By Id</button>
    </div>  
  );
}

export default App;
