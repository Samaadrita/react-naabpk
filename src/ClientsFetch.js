import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowClientData from './ShowClientData';

export default function ClientsFetch() {
  let [clients, setClients] = useState(null);
  const fetchClients = async () => {
    const clientsApi = await axios.get(
      'https://mighty-oasis-32829.herokuapp.com/api/clients'
    );
    return clientsApi.data;
  };
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchClients();
      setClients(response);
    };
    fetchData();
  }, []);
  // console.log(clients);
  return clients?.length > 0 ? (
    <ShowClientData clients={clients} />
  ) : (
    <div>Loading Data...</div>
  );
}
