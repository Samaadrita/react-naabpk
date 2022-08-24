import React from 'react';

export default function ShowClientData(props) {
  const clients = props.clients;
  return (
    <>
      {clients.forEach((item) => (
        <div>
          <div>Client ID</div>
          <div>Informations</div>
          <div>Date Of Birth</div>
          <span>{item?.birthday}</span>
          <div>First Name</div>
          <span>{item?.firstname}</span>
          <div>Last Name</div>
          <span>{item?.name}</span>
        </div>
      ))}
    </>
  );
}
