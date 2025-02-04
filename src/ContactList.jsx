import { useEffect, useState } from "react"

const ContactList = () => {
  const [ userData, setUserData] = useState([]);
  
  useEffect(() => {
    const getUser = async() => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const jsonArr = await response.json();
      setUserData(jsonArr);
    }

    getUser();
  }, []);

  
  console.log(userData);
  return (
    <>
    <ul>
      {userData.map((user) => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
    </>
  )
}

export default ContactList