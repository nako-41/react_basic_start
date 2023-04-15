import React from 'react';
import './App.css';
//import Headers from './components/Header';
//import React from 'react';
//import Navi from './components/Navi';
import Categories from './components/Categories';
import Products from './components/Products';
import { Container, Row,Col } from 'reactstrap';
// import Deneme from './components/Deneme';
// const name="okan";
// const surname="kaipoglu";
// const isloggedIn=false;

function App(){

// return React.createElement("div",null,"hello")
  return(
    <>
    <Container>
      <Row>
        <Col xs="6">
        <Categories/>
        </Col>
        <Col xs="6">
        <Products/>
        </Col>
      </Row>
      {/* <Row>
      <Col xs="6">

        </Col>
      </Row> */}
    </Container>

     {/* <h1> {isloggedIn ? `"Benim adim":${name} ${surname} `: "oturum acilamadi"} </h1> */}

    </>
  )
}
export default App;