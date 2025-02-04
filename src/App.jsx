import { useEffect, useState } from "react"

import ContactList from "./ContactList.jsx"
import ContactDetails from "./ContactDetails.jsx"


function App() {
  const [selectedContact, setSelectedContact] = useState({});

  return (
    <>
      {
        selectedContact.name ?
        <ContactDetails selectedContact={selectedContact} setSelectedContact={setSelectedContact}/> :
        <ContactList setSelectedContact={setSelectedContact}/>
      }


    </>
  )
}

export default App
