import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
const LoadingWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20%;

    div {
      margin-left: 10px;
    }
  `

  return (
    <LoadingWrapper>
        Loading
        <Spinner animation="border" role="status">
        </Spinner>
      </LoadingWrapper>
  )
}

export default Loader