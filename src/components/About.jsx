import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

const About = () => {

  const Title = styled.div`
    font-family: 'Rock Salt', curave;
    display:block;
    margin: 50px auto 0 auto;
    font-size: 3rem;
  `

  const TextPar = styled.p`
    font-family: 'Rock Salt', curave;
    font-size: 1rem;
    text-align: justify;
    padding: 20px 300px;
  `

  const Btn = styled(Button)`
    background-color: #d0dede;
    border: none;
    color: black;

    &:hover {
        background-color: #bebebe;
    }

    a {
        text-decoration: none;
        color: black;
    }
  
  `

  return (
    <>
        <Title>Nosotros</Title>
        <img src="/assets/flower.jpg" width="400" alt="flower"/>
        <TextPar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sodales lacus. Nam elementum posuere sapien a eleifend. Mauris lacinia tortor quis rutrum hendrerit. Donec id enim porta, iaculis sapien a, dignissim ligula. Vivamus fringilla nulla sed mi iaculis, sed semper elit tempus. Nullam sagittis dui at efficitur finibus. Pellentesque vestibulum ultricies diam vel finibus. Etiam sodales eros est, ac gravida dolor tincidunt sed. Donec tincidunt dolor vitae est efficitur fringilla. Fusce fermentum varius cursus. Nunc tincidunt odio vel nibh rutrum, rhoncus consequat lacus pellentesque. Praesent condimentum varius turpis a placerat. Aliquam congue aliquam lectus, non venenatis eros consequat ut. In id commodo libero. Ut a fermentum leo, interdum tempor arcu.
        </TextPar>
        <TextPar>
            Praesent lorem tellus, lacinia vel lorem a, sollicitudin finibus ligula. Nulla consectetur eget lacus faucibus luctus. Maecenas lorem urna, auctor efficitur sem non, finibus vehicula est. Nunc pretium odio neque, ut gravida lacus tempor non. Nunc feugiat dolor vitae porttitor ultricies. Nunc eu metus sit amet tortor ultricies tempor sed at leo. Sed viverra velit vel massa feugiat, sed varius sem suscipit. Sed vitae tincidunt leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur eu nulla ornare nisi accumsan posuere non ac eros. Etiam at sapien risus. Quisque nec nunc a enim finibus imperdiet. Nulla in est eget sapien ultricies pellentesque. Donec in enim at justo efficitur vestibulum. Praesent ullamcorper tempor varius.
        </TextPar>
        <TextPar>
        Donec hendrerit rutrum ipsum. Quisque eget lacus ligula. Etiam lobortis scelerisque massa in luctus. Mauris bibendum nunc placerat, tincidunt diam id, scelerisque sapien. Duis ut magna lorem. Donec ut hendrerit odio, id efficitur quam. Morbi eget blandit nunc. Aliquam commodo felis vel placerat ultrices. Vivamus interdum eget tortor et fermentum. Suspendisse purus massa, vulputate non tempor nec, sodales eget tortor. Duis at ligula volutpat, efficitur purus in, lobortis orci. Duis sem eros, euismod quis consectetur et, eleifend non lorem. Mauris iaculis luctus bibendum.
        </TextPar>
        <Btn variant="primary"><Link to={'/'}>Volver</Link></Btn>
    </>
  )
}

export default About