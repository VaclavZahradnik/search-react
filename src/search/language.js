/** @jsx jsx */
import { useCallback } from 'react';
import { jsx } from '@emotion/core';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import iso6391 from 'iso-639-1';

import * as Css from './language-css.js';

export function Language({ lang, onChange }) {
  let language;
  if (lang) {
    if (lang.includes('-')) lang = lang.split('-')[0];
    language = iso6391.getNativeName(lang);
  }

  const items = iso6391
    .getAllNativeNames()
    .map(language => ({ language, code: iso6391.getCode(language) }))
    .filter((x, i, self) => self.findIndex(y => y.code === x.code) === i);

  const handleClick = useCallback(lang => onChange && onChange(lang), [onChange]);

  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="outline-secondary"
      size="sm"
      title={language || 'All languages'}
      className="ml-3 mb-1"
      css={Css.language}
    >
      <Dropdown.Item active={!lang} onClick={() => handleClick()}>
        All languages
      </Dropdown.Item>
      {items.map(({ language, code }) => (
        <Dropdown.Item key={code} active={code === lang} onClick={() => handleClick(code)}>
          {language}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default Language;
