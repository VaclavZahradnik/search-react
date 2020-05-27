# Search engine example

This app is a very basic example of a fulltext search engine for educational purposes. The goal of this project is to educate about how internet search engines work at the very basic level and to provide a working example with source codes for explanation.

There are numerous explanations that does a pretty good job of explaining the topic. You may google the question and land up [here](https://www.google.com/search/howsearchworks/) for example. But if you have a technical mind and like to see some code, this project is a working demonstration for you.

## What it does

This app aims to demonstrate three basic concepts:
- Building up an index of internet pages.
- Fulltext search catalogue.
- Searching and delivering results.

## What it does not

It does not show you any actual algorithms used in search tech companies. Those are really complex and they are private.

It does not show you how google manages to index a sizable portion of the whole internet. This is not a programming issue, but rather an architectural and IT one.

It does not go into any areas such as content management, advertising, different content types, synergies with other apps, etc.

## How to run

Install [ArangoDb](https://www.arangodb.com/) database.

Clone all three project repositories:

```
git clone https://github.com/VaclavZahradnik/search-react
git clone https://github.com/VaclavZahradnik/search-server
git clone https://github.com/VaclavZahradnik/search-crawler
```

Modify `env/development.json` in `search-server` and `search-crawler` repositories and change user name and password to access ArangoDb database.

Switch to `search-crawler` repository and initialize the search-example database by running:

```
npm install
npm run init-db
```

In each cloned repository run:

```
npm install
npm start
```

Optionaly, you can run search-crawler independently or not at all.

## Search engine example frontend

This repository contains frontend for the search engine example. It is written with modern frontend technologies such as react hooks, emotion and react-bootstrap.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
