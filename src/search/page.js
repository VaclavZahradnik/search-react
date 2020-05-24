/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Card, Dropdown, DropdownButton } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import * as Css from './page-css.js';

const TEXT_WINDOW = 10;
const MAX_TEXT_LENGTH = 1000;

function getText(text, keywords) {
  if (!keywords.length) return text.substring(0, MAX_TEXT_LENGTH);

  const regex = new RegExp(keywords.join('|'), 'ig');
  const from = text.search(regex);
  if (from > 0) text = text.substring(from - TEXT_WINDOW, from - TEXT_WINDOW + MAX_TEXT_LENGTH);
  else text.substring(0, MAX_TEXT_LENGTH);

  return text.replace(regex, '<strong>$&</strong>');
}

export function Page({ keywords, page }) {
  const text = getText(page.text, keywords);

  const imgSrc = 'data:image/png;base64,' + page.favicon;

  return (
    <Card css={Css.page}>
      <Card.Body>
        <Card.Title>
          <a href={page.url}>{page.title}</a>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <img src={imgSrc} alt="" width="16" height="16" className="mr-2" />
          <a href={page.url}>{page.url}</a>
          <DropdownButton id="dropdown-basic-button" variant="outline-secondary" size="sm" title="">
            <LinkContainer to={`/cache/${encodeURIComponent(page.url)}`}>
              <Dropdown.Item>Cached version</Dropdown.Item>
            </LinkContainer>
          </DropdownButton>
        </Card.Subtitle>
        <Card.Text dangerouslySetInnerHTML={{ __html: text }} />
      </Card.Body>
    </Card>
  );
}

export default Page;
