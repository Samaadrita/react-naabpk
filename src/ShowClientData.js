import React from 'react';
import './style.css';

export default function ShowClientData(props) {
  const clients = props.clients;
  console.log(clients)
  return (
    <>
      {clients.map((item) => (
        <div className="clientInfo">
          <div>Client ID</div>
          <div>Informations</div>
          {item?.birthday && (
            <>
              <div>Date Of Birth</div>
              <span>{item?.birthday}</span>
            </>
          )}
          <div>First Name</div>
          <span>{item?.firstname}</span>
          <div>Last Name</div>
          <span>{item?.name}</span>
        </div>
      ))}
    </>
  );
}
