import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SearchBox from '../home/search-box.js';

import './home.scss';

export function Home() {
  return (
    <Container className="home">
      <Row>
        <Col>
          <div className="centered">
            <SearchBox />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
