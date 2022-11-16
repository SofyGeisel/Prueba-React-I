import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from "./BarraNav";
import Paginas from "./Paginas";
import Characters from "./Characters";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";


function MiApi() {
  //Crear estados
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [busqueda, setBusqueda] = useState("");
  

  const initialUrl = "https://rickandmortyapi.com/api/character";

  //Hacer request a la API
  const fetchCharacters = (url) => {
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  characters.sort()

  //Para ir a la página anterior
  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  //Para ir a la página siguiente
  const onNext = () => {
    fetchCharacters(info.next);
  };

  //Función de búsqueda
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  
  //Filtrar elementos por nombre
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = characters.filter((elemento) => {
      if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      
      ){
        return elemento;
      }
    });
    setCharacters(resultadosBusqueda)
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);



  return (
    <>
      <BarraNav brand="RICK AND MORTY" />
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Busca tu personaje favorito</Form.Label>
        <Form.Control type="text" placeholder="Ej: Morty" value={busqueda} onChange={handleChange} />
      </Form.Group>
      <Container className="mt-5">
        <Paginas
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Paginas
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </Container>
    </>
  );
}

export default MiApi;
