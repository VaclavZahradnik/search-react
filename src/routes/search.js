/** @jsx jsx */
import { useCallback, useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import SearchBox from '../search/search-box.js';
import SearchResults from '../search/search-results.js';
import NoResults from '../search/no-results.js';
import Language from '../search/language.js';

import * as Css from './search-css.js';

async function fetchPages(text, lang) {
  try {
    const response = await fetch('/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text, lang })
    });
    if (!response.ok) throw response;
    const pages = await response.json();
    return pages;
  } catch (err) {
    console.error(err);
    return [];
  }
}

function getLanguage() {
  let lang = new URL(window.location.href).searchParams.get('lang');
  if (!lang) lang = navigator.language;
  if (lang && lang.includes('-')) lang = lang.split('-')[0];
  return lang;
}

export function Search() {
  const params = useParams();
  const text = params.text || '';
  const [lang, setLang] = useState(getLanguage());
  const [pages, setPages] = useState([]);

  useEffect(() => {
    (async () => {
      const pages = await fetchPages(text, lang);
      setPages(pages);
    })();
  }, [text, lang, setPages]);

  const history = useHistory();

  const handleSearch = useCallback(
    async searchText => {
      if (searchText !== text) {
        if (lang) history.push(`/search/${searchText}?lang=${lang}`);
        else history.push(`/search/${searchText}`);
      } else {
        const pages = await fetchPages(searchText, lang);
        setPages(pages);
      }
    },
    [text, lang, history, setPages]
  );

  const handleLangChange = useCallback(lang => setLang(lang), [setLang]);

  return (
    <Container css={Css.search}>
      <Row>
        <Col lg={7}>
          <SearchBox text={text} onSearch={handleSearch} />
        </Col>
      </Row>
      <Row>
        <Col lg={7}>
          <Language lang={lang} onChange={handleLangChange} />
        </Col>
      </Row>
      {pages.length ? <SearchResults text={text} pages={pages} /> : <NoResults text={text} />}
    </Container>
  );
}

export default Search;
