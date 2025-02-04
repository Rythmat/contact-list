import { useEffect, useState } from "react"

const ContactList = ({setSelectedContact}) => {
  const [ userData, setUserData] = useState([]);
  
  useEffect(() => {
    const getUser = async() => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const jsonArr = await response.json();
      setUserData(jsonArr);
    }
    getUser();
  }, []);

  
  return (
    <>
    <h1>My Favorite Contacts</h1>
    <ul>
      {
      userData.map((user) => {
        return (
          <li key={user.id} onClick={() => setSelectedContact(user)} >
          {user.name}
          </li>
        )
      })
      }
    </ul>
    </>
  )
}

export default ContactList