import { useState } from 'react';

import { Form, Button, Label, Input, Div } from './ContactForm.styled';
import PropTypes from 'prop-types';

export function ContactForm ({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

const handleEnter = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        throw new Error();
    }
};
  
  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit({name, number});
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
 
    return (
      <Div>
        <Form onSubmit={onFormSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              onChange={handleEnter}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Phone
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              onChange={handleEnter}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </Div>
    );
  }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;



// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleEnter = e => {
//     const { name, value } = e.target;

//     this.setState({ [name]: value });
//   };
//   onFormSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };
//   render() {
//     return (
//       <Div>
//         <Form onSubmit={this.onFormSubmit}>
//           <Label>
//             Name
//             <Input
//               type="text"
//               name="name"
//               value={this.state.name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               onChange={this.handleEnter}
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </Label>
//           <Label>
//             Phone
//             <Input
//               type="tel"
//               name="number"
//               value={this.state.number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               onChange={this.handleEnter}
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </Label>

//           <Button type="submit">Add contact</Button>
//         </Form>
//       </Div>
//     );
//   }
// }
