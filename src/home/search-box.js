import React, { useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';

import './search-box.scss';

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
    <Form className="home-search-box" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" value={text} onChange={handleChange} placeholder="Type text to search..." />
      </Form.Group>

      <Button variant="primary" type="button">
        Search
      </Button>
    </Form>
  );
}

export default SearchBox;
