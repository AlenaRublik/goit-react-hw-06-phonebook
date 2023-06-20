import { ContactForm, Filter, Contacts } from 'components/index';
import { H1, H2, Message } from './App/App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);
  return (
    <>
      <H1>PhoneBook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      {contacts.length > 0 ? (
        <div>
          <Filter />
          <Contacts />
        </div>
      ) : (
        <Message>No contacts yet</Message>
      )}
    </>
  );
}

