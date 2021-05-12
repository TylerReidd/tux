import React from 'react';
import styled from 'styled-components'


const PlainBtn = styled.button`
  /* position: absolute; */
  left: 12%;
  right: 12%;
  top: 12.48%;
  bottom: 12.61%;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size:14px;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 38px;
  height: 18px;
  background: none;
  border: none;
  color: rgba(34,34,34,1);
   &:hover{
     text-decoration-line: underline;
     cursor: pointer;
   }
   &:focus{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 0;
    border: 1px solid #3C8582;
    text-decoration-line: underline;
    width: 71px;
    height: 18px;
    outline: none;
   }
   &:disabled {
     color: #CCCCCC
   }

`


const PlainButton = () => {



  return (
    <div>
      <PlainBtn>Label</PlainBtn>
    </div>
  )
}

export default PlainButton