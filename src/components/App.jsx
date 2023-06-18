import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import shortid from 'shortid';
import { H1, H2, Message } from './App/App.styled';

export default function App () {
  const [contacts, setContacts] = useState(()=>JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
  
  const addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter( e.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

 
    
    return (
      <>
        <H1>PhoneBook</H1>
        <ContactForm onSubmit={addContact} />
        {contacts.length > 0 ? (
          <div>
            <Filter value={filter} onChange={changeFilter} />
            <H2>Contacts</H2>
            {getVisibleContacts().length !== 0 ? (
              <Contacts
                contacts={getVisibleContacts()}
                onDeleteContact={deleteContact}
              />
            ) : (
              <Message>No contacts found for your request</Message>
            )}
          </div>
        ) : (
          <Message>No contacts yet</Message>
        )}
      </>
    );
  
}


// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };


//   componentDidMount() {
//     const contactsLS = localStorage.getItem('contacts');
//     if (contactsLS) {
//       this.setState({contacts : JSON.parse(contactsLS)});
//     }
    
//   }
  
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts.length !== contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//     }
//   }



//   addContact = ({ name, number }) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     if (
//       this.state.contacts.some(
//         contact =>
//           contact.name.toLowerCase() === newContact.name.toLowerCase() ||
//           contact.number === newContact.number
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts]
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(
//       contact =>
//         contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };
