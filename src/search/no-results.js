import React from 'react';
import { Row, Col } from 'react-bootstrap';

export function NoResults({ text }) {
  return (
    <Row>
      <Col lg={7}>
        No results found for <strong>{text}</strong>...
      </Col>
    </Row>
  );
}

export default NoResults;
