import styled from '@emotion/styled';

export const Div = styled.div`

`;
export const Form = styled.form`
  margin: 0 auto;
  width: 500px;
  text-align: center;
`;
export const Label = styled.label`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 300px;
  text-align: center;
  color: #5b419b;
`;
export const Input = styled.input`
  display: block;
  padding: 4px 8px;
  margin-top: 4px;
  background-color: #b7f8dd;
  font-weight: 500;
  font-size: 16px;
  color: #392962;
  width: 100%;
  border-radius: 4px;
  border-color: #07c274;
  outline: none;
`;
export const Button = styled.button`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: inherit;
  width: 200px;
  cursor: pointer;
  color: #5b419b;
  border: 2px solid;
  border-radius: 10px;
  border-color: #07c274;
  transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover,
  :focus {
    transform: scale(1.08);
  }
`;
