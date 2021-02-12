import { FC, Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Loader from '../Widgets/Loader';

import Album from './Album';
import Header from './Header';

const Body: FC<any> = (): any => {
  const [isError, setIsError] = useState(false);
  const [albumList, setAlbumList] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // will fetch from api on every change in search text
  useEffect(() => {
    searchText !== '' ? handleSearch(searchText) : setAlbumList([]);
  }, [searchText]);

  // fetching response from iTunes based on search text
  const handleSearch = (text: string) => {
    setIsLoading(true);
    const defaultOptions = {
      timeout: 90000,
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    axios
      .get(`https://itunes.apple.com/search?term=${text}`, {
        ...defaultOptions,
      })
      .then((response: any): any => {
        const list = response?.data?.results;
        setAlbumList(list);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((err: any): any => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  const isSearchingIllustration = searchText === '' && albumList.length === 0;
  const isNotFound = isError && searchText !== '' && albumList.length === 0;

  return (
    <div className="body">
      {isLoading && <Loader />}
      <Header searchText={searchText} setSearchText={setSearchText} />
      <div className="body__info">
        <div className="body__infoText">
          <strong>Albums</strong>
          <h2>Discover Album</h2>
          <p>Let's Play</p>
        </div>
      </div>
      {isSearchingIllustration && (
        <div className="flex-justified">
          <img
            alt="searching icon"
            className="illustration-sizing"
            src="static/images/searching.svg"
          />
        </div>
      )}
      {isNotFound && (
        <div className="flex-justified">
          <img
            alt="empty icon"
            src="static/images/empty.svg"
            className="illustration-sizing"
          />
        </div>
      )}
      <div className="body__songs">
        {albumList.map((item, index) => (
          <Fragment key={index}>
            <Album track={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Body;
