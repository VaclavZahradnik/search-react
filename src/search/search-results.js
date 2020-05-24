import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { getKeywords } from './get-keywords.js';
import Page from './page.js';

export function SearchResults({ text, pages }) {
  const keywords = getKeywords(text);

  return pages.map(page => (
    <Row key={page.id}>
      <Col lg={7}>
        <Page keywords={keywords} page={page} />
      </Col>
    </Row>
  ));
}

export default SearchResults;
