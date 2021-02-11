import React from 'react';

const AlbumContext = React.createContext({});

export const AlbumProvider = AlbumContext.Provider;
export const AlbumConsumer = AlbumContext.Consumer;

export default AlbumContext;
