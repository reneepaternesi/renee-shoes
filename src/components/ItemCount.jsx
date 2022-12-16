import React, {useState}  from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ItemCount = ({maxValue, onAdd, sizeSelected}) => {
    const [counter, setCounter] = useState(0)

    const ItemCounterWrapper = styled.div`
        background-color: #e9ecef;
        align-items: center;
        width: 80px;
        display: flex;
        flex-direction: column;
        width: 175px;
        padding: 10px;
        border-radius: 4px;
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
        color: black;
        border-color: #bebebe;
        
        &:hover {
            background-color: #bebebe;
            color: black;
            border-color: black;
        }
    `
    
    const Msg = styled.p`
        font-size: 12px;
        color: #6c757d;
        margin-top: 10px;
    `

    const add = () => {
        if(counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const reduce = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }

    const handleClick = () => {
        onAdd(counter)
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
                <Button variant="outline-secondary" id="button-addon1" onClick={add} disabled={counter === maxValue || !sizeSelected}>
                +
                </Button>
            </InputGroupWrapper>
            <AddToCartBtn variant="outline-primary" size="sm" onClick={handleClick} disabled={!sizeSelected}>
                Agregar al carrito
            </AddToCartBtn>
            { counter === maxValue && 
                <Msg>Se alcanzó la cantidad máxima disponible</Msg>
            }
            {!sizeSelected &&
                <Msg>Selecciona talle</Msg>
            }
        </ItemCounterWrapper>
    </>
  )
}

export default ItemCount