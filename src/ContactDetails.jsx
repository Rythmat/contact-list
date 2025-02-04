const ContactDetails = ({selectedContact, setSelectedContact}) => {
  const firstName = selectedContact.name.slice(0, selectedContact.name.indexOf(' '));

  return (
    
    <>
    <h2 style={{marginBottom: 0}}>{selectedContact.name}</h2>
    <p style={{ marginTop: 0, marginLeft: 30}}> from {selectedContact.company.name}</p>
    <hr></hr>
    <section style={{}}>
    <p style={{marginTop: 0, marginLeft: 10, marginBottom: 0}}> Phone:   {selectedContact.phone}</p>
    <p style={{marginTop: 0, marginLeft: 10, marginBottom: 0}}> Email:   {selectedContact.email}</p>
    <p style={{marginTop: 0, marginLeft: 10, marginBottom: 0}}> Lives on   {selectedContact.address.street}</p>
    <a href={selectedContact.website} style={{marginTop: 0, marginLeft: 10, marginBottom: 0}}>{firstName}'s website.</a>
    </section>
   

    <p></p>
    <button onClick={() => setSelectedContact({})}> Back </button>
    </>
    
  )

}

export default ContactDetails