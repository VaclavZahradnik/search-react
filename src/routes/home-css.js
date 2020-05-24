import { css } from '@emotion/core';

export const home = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;

  & > .row {
    flex: 1 1 100%;
    align-items: center;

    .centered {
      display: flex;
      justify-content: center;
    }
  }
`;
