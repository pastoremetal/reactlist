import styled from 'styled-components';

export const InputContainer = styled.div`
  cursor: text;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  line-height: 1.1875rem;
  
  > label {
    transform: translate(1rem, -0.4rem) scale(0.75);
    z-index: 1;
    transform-origin: top left;
    top: 0;
    left: 0;
    position: absolute;
    display: block;
    line-height: 1;
  }

  > fieldset {
    top: -0.4rem;
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
      width: 63.5px;
      padding: 0;
      text-align: left;
      line-height: 11px;
    }
  }
`;
