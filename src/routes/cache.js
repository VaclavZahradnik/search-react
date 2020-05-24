import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

async function fetchCache(url) {
  try {
    const response = await fetch(`/cache/${url}`);
    if (!response.ok) throw response;
    const pages = await response.json();
    return pages;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export function Cache() {
  const { url } = useParams();
  const [cache, setCache] = useState([]);

  useEffect(() => {
    (async () => {
      const cache = await fetchCache(url);
      setCache(cache);
    })();
  }, [url, setCache]);

  const decodedUrl = decodeURIComponent(url);

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>
                <a href={decodedUrl}>{cache.title}</a>
              </Card.Title>
              <Card.Text>{cache.text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cache;
