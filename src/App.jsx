import { useEffect, useState } from "react"

import ContactList from "./ContactList.jsx"
import ContactDetails from "./ContactDetails.jsx"


function App() {
  const [selectedContact, setSelectedContact] = useState({});

  return (
    <>
      <h1>My Favorite Contacts</h1>
      {
        selectedContact.name ?
        <ContactDetails selectedContact={selectedContact} setSelectedContact={setSelectedContact}/> :
        <ContactList setSelectedContact={setSelectedContact}/>
      }


    </>
  )
}

export default App
