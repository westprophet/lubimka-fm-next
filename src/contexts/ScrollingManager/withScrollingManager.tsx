import React from 'react';
import ScrollingManager from './ScrollingManager';

const withScrollingManager =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  ({ ...props }) => {
    return (
      <ScrollingManager>
        <Component {...props} />
      </ScrollingManager>
    );
  };

export default withScrollingManager;
