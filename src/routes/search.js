import React, { useCallback, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import SearchBox from '../search/search-box.js';
import SearchResults from '../search/search-results.js';
import NoResults from '../search/no-results.js';

import './search.scss';
import Language from '../search/language.js';

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
  const { text } = useParams();
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
    text => {
      if (lang) history.push(`/search/${text}?lang=${lang}`);
      else history.push(`/search/${text}`);
    },
    [lang, history]
  );

  const handleLangChange = useCallback(lang => setLang(lang), [setLang]);

  return (
    <Container className="search">
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