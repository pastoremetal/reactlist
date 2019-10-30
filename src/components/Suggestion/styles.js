import styled from 'styled-components';

export const StyledUl = styled.ul`
  background-color: #fff;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  list-style: none;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)
`;

export const StyledLink = styled.a`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: block;
  
  :hover {
    background-color: #ccc;
  }
`;
