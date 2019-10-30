import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 18.5px 14px;
  width: 100%;
  border: 0;
  height: 1.1875em;
  margin: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
`;

export const InputContainer = styled.div`
  cursor: text;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  
  > label {
    transform: translate(1rem, -0.4rem) scale(0.75);
    transform-origin: top left;
    top: 0;
    left: 0;
    position: absolute;
  }

  > fieldset {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    pointer-events: none;
    border-color: black;

    > legend {
      min-width: 4.5rem;
      text-align: left;
    }
  }
`;
