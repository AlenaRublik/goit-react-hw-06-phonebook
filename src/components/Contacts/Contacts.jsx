import PropTypes from 'prop-types';
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

function Contacts({ contacts, onDeleteContact }) {
  return (
    <UlList>
      {contacts.map(({ id, name, number }) => {
        return (
          <LiItem key={id}>
            <SpanIcon
              
            >
              <RiContactsLine />
            </SpanIcon>
            <SpanName>{name}</SpanName>
            <SpanNumber>{number}</SpanNumber>
            <ButtonDlt type="button" onClick={() => onDeleteContact(id)}>
              <BsFillTrash3Fill />
            </ButtonDlt>
          </LiItem>
        );
      })}
    </UlList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
