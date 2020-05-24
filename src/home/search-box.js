/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx } from '@emotion/core';
import { Form, Button } from 'react-bootstrap';

import * as Css from './search-box-css.js';

export function SearchBox({ onSearch }) {
  const [text, setText] = useState('');
  const handleChange = useCallback(
    e => {
      setText(e.target.value);
    },
    [setText]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (onSearch) onSearch(text);
    },
    [text, onSearch]
  );

  return (
    <Form css={Css.searchBox} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" value={text} onChange={handleChange} placeholder="Type text to search..." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
