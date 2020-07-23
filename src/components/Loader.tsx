import React, { FC } from 'react';

const Loader: FC = () => (
  <div className="loader">
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
