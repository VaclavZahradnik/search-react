import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import SearchBox from '../home/search-box.js';

import './home.scss';

export function Home() {
  const history = useHistory();

  const handleSearch = useCallback(
    text => {
      history.push(`/search/${text}`);
    },
    [history]
  );

  return (
    <Container className="home">
      <Row>
        <Col>
          <div className="centered">
            <SearchBox onSearch={handleSearch} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
