import styled from '@emotion/styled';

export const UlList = styled.ul`
  width: 500px;
  margin: 0 auto;
  text-align: center;
`;
export const LiItem = styled.li`
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid hotpink;
`;
export const SpanIcon = styled.span`
  svg {
    width: 30px;
    height: 30px;
  }
`;

export const SpanName = styled.span`
  color: hotpink;
  font-weight: 500;
  font-size: 24px;
`;

export const SpanNumber = styled.span`
  color: #34275a;
  font-weight: 500;
  font-size: 24px;
`;

export const ButtonDlt = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  color: #07c274;
  border-radius: 50%;
  border-color: transparent;
  outline: none;
  transition: transform 250ms ease-in;
  :hover,
  :focus {
    svg {
      transform: scale(1.1);
    }
  }
  svg {
    width: 24px;
    height: 24px;
    transition: transform 250ms linear;
  }
`;
