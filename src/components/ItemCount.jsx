import React, {useState}  from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const ItemCounterWrapper = styled.div`
        background-color: rgb(233, 236, 239);
        align-items: center;
        width: 80px;
        display: flex;
        flex-direction: column;
        width: 175px;
        padding: 10px;
    `

    const InputGroupWrapper = styled(InputGroup)`
        border: 1px solid #bebebe;
        border-radius: 4px;
        flex-direction: row;
        display: flex;
        width: 130px;

        button, input {
            border: none;
            text-align: center;
            background-color: white;
            font-size: 0.9rem;
        }

        button:hover {
            background-color: #bebebe;
            border-radius: 0px;
        }
    `

    const AddToCartBtn = styled(Button)`
        
        &:hover {
            background-color: #bebebe;
            color: black;
            border-color: black;
        }
    `

    const add = () => {
        setCounter(counter + 1)
    }

    const reduce = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }
  return (
    <>
        <ItemCounterWrapper>
            <InputGroupWrapper className="mb-3">
                <Button variant="outline-secondary" id="button-addon1" onClick={reduce} disabled={counter === 0 }>
                -
                </Button>
                <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                value={counter}
                readOnly = "true"
                >
                </Form.Control>
                <Button variant="outline-secondary" id="button-addon1" onClick={add}>
                +
                </Button>
            </InputGroupWrapper>
            <AddToCartBtn variant="outline-primary" size="sm">
                Agregar al carrito
            </AddToCartBtn>
        </ItemCounterWrapper>
    </>
  )
}

export default ItemCount