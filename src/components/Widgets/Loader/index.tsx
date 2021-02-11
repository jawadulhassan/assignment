import React, { FC } from 'react';
import ReactLoading from 'react-loading';

const Loader: FC<any> = (): any => {
  return (
    <div className="app-loader">
      <ReactLoading type="bubbles" color="white" height={100} width={100} />
    </div>
  );
};

export default Loader;
