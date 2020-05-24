/** @jsx jsx */
import { useState, useCallback } from 'react';
import { jsx } from '@emotion/core';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import * as Css from './search-box-css.js';

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
    <Form className="ml-3 mr-3 mt-3" css={Css.searchBox} onSubmit={handleSubmit}>
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
