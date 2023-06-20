import { RiContactsLine } from 'react-icons/ri';
import { BsFillTrash3Fill } from 'react-icons/bs';
import {
  UlList,
  LiItem,
  SpanIcon,
  SpanName,
  SpanNumber,
  ButtonDlt,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = (() => {
    return contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter.toLowerCase())
      )
  })();

  return (
    <UlList>
      {getVisibleContacts.map(({ id, name, number }) => {
        return (
          <LiItem key={id}>
            <SpanIcon>
              <RiContactsLine />
            </SpanIcon>
            <SpanName>{name}</SpanName>
            <SpanNumber>{number}</SpanNumber>
            <ButtonDlt type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              <BsFillTrash3Fill />
            </ButtonDlt>
          </LiItem>
        );
      })}
    </UlList>
  );
}

