import React from 'react';
import DefaultHeader from './DefaultHeader';

export default React.memo(DefaultHeader, (p, n) => {
  return p.fixed === n.fixed && p.show === n.show && p.transparent === n.transparent;
});
