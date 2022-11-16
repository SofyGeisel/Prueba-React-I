import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const BarraNav = ({ brand }) => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" >
    <Container>
      <Navbar.Brand>{brand}</Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default BarraNav