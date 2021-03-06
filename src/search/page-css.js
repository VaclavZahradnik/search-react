import { css } from '@emotion/core';

export const page = css`
  &:not(:hover) {
    border-color: transparent;
  }

  .card-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .card-subtitle {
    display: flex;
    align-items: center;
    font-size: 0.9em;

    a {
      color: #6c757d;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    button {
      border: none;
      line-height: 1;
    }
  }

  .card-text {
    font-size: 0.9em;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;
