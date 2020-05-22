import React, { useState, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';

import './search-box.scss';

export function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const handleChange = useCallback(
    value => {
      setSearchText(value);
    },
    [setSearchText]
  );

  const rerere = function(...args) {
    console.log("aa");
  }

  return (
    <Form className="search-box">
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="text" value={searchText} onChange={rerere} placeholder="Type text to search..." />
      </Form.Group>

      <Button variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
