import React from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

function Paginas({ prev, onPrevious, onNext, next }) {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <Nav className="justify-content-center my-4">
      <Pagination>
        {prev ? (
          <Pagination.Item>
            <Button variant="info" onClick={handlePrevious}>
              Previous
            </Button>
          </Pagination.Item>
        ) : null}
        {next ? (
          <Pagination.Item>
            <Button variant="info" onClick={handleNext}>
              Next 
            </Button>
          </Pagination.Item>
        ) : null}
      </Pagination>
    </Nav>
  );
}

export default Paginas;
