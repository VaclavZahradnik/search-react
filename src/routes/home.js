/** @jsx jsx */
import { useCallback } from 'react';
import { jsx } from '@emotion/core';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import SearchBox from '../home/search-box.js';

import * as Css from './home-css.js';

export function Home() {
  const history = useHistory();

  const handleSearch = useCallback(
    text => {
      history.push(`/search/${text}`);
    },
    [history]
  );

  return (
    <Container css={Css.home}>
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
