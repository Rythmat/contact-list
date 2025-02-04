import { useEffect, useState } from "react"

const ContactDetails = ({selectedContact, setSelectedContact}) => {

  return (
    <>
    <h2>{selectedContact.name}</h2>
    <button onClick={() => setSelectedContact({})}> Back </button>
    </>
    
  )

}

export default ContactDetails