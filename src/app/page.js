'use client';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Row, Col } from "react-bootstrap";
export default function Home() {
  
  const [likes, setLikes] = useState(50)
  const [dislikes, setDislikes] = useState(20)

  return (
   <Container>
   <Row className='justify-content-center'>
    <Row className='mt-5'>
      <Col>
      <Button variant='secondary'>Me gusta</Button>
      <Button variant='secondary' className='ms-3'>No me gusta</Button>
      </Col>
    </Row>
   </Row>
   </Container>
  );
}
