import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

export function About() {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="mt-3">
            <h1>Search app</h1>
            <p>
              This app is a very basic example of a fulltext search engine for educational purposes. The goal of this
              project is to educate about how internet search engines work at the very basic level and to provide a
              working example with source codes for explanation.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
