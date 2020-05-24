import React, { useState, useCallback } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import './search-box.scss';

export function SearchBox({ text: propText, onSearch }) {
  const [text, setText] = useState(propText);
  const [prevPropText, setPrevPropText] = useState(propText);

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

  if (propText !== prevPropText) {
    setText(propText);
    setPrevPropText(propText);
  }

  return (
    <Form className="search-box ml-3 mr-3 mt-3" onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl value={text} onChange={handleChange} placeholder="Type text to search..." />
        <InputGroup.Append>
          <Button variant="outline-secondary" type="submit">
            <span className="fa fa-search" />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
}

export default SearchBox;
