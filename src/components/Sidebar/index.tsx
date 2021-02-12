import { FC, useState, useEffect, useContext, Fragment } from 'react';

import AlbumContext from '../../shared/contexts/albumContext';

import SidebarOption from './SidebarOption';

const LibraryMusic = () => {
  return (
    <img
      alt="music note icon"
      className="small__icon"
      src="static/images/music-note.svg"
    />
  );
};

const Sidebar: FC<any> = ({ toggleNavbar }: any): any => {
  // Consuming the album context

  let albumSelector: any = [];
  albumSelector = useContext(AlbumContext);

  const [searchText, setSearchText] = useState('');
  const [albumList, setAlbumList] = useState(
    albumSelector?.selectedAlbumList || []
  );

  // will set new filtered list
  useEffect(() => {
    searchText !== ''
      ? handleSearch(searchText)
      : setAlbumList(albumSelector?.selectedAlbumList);
  }, [searchText]);

  // will set new favourites list based on newly added favourite items
  useEffect(() => {
    setAlbumList(albumSelector?.selectedAlbumList);
  }, [albumSelector?.selectedAlbumList]);

  // setting new list based on filter text
  const handleSearch = (text: string) => {
    let newArr = albumSelector?.selectedAlbumList.filter((item: any) =>
      item.trackName.toLowerCase().includes(text.toLowerCase())
    );
    setAlbumList(newArr);
  };

  // deleting item from context and updating favourite list
  const deleteHandler = (index: number) => {
    const { selectedAlbumList, setSelectedAlbumList } = albumSelector;
    let arr = [...selectedAlbumList];
    arr.splice(index, 1);
    setSelectedAlbumList(arr);
  };

  return (
    <Fragment>
      <div className="sidebarOption">
        <LibraryMusic />
        <h4>Your Library</h4>
      </div>
      <br />
      <strong className="sidebar__title">Favourites</strong>
      <hr />
      {albumSelector?.selectedAlbumList.length > 1 && (
        <div className="filter-search" style={{ margin: 12 }}>
          <input
            type="text"
            value={searchText}
            placeholder="Search"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      )}
      {albumList.length > 0 && (
        <div className="favourites-wrapper">
          {albumList.map((playlist: any, index: number) => (
            <Fragment key={index}>
              <SidebarOption
                index={index}
                searchText={searchText}
                title={playlist?.trackName}
                icon={playlist.artworkUrl60}
                deleteHandler={deleteHandler}
              />
            </Fragment>
          ))}
        </div>
      )}

      {albumList.length === 0 && (
        <div className="flex-align-items">
          <img
            alt="blank icon"
            src="static/images/blank.svg"
            className="illustration-sizing-small"
          />
        </div>
      )}
      <div className="close__menu" onClick={toggleNavbar}>
        <img
          className="small__icon"
          src="static/images/cancel.svg"
          alt="cancel icon"
        />
      </div>
    </Fragment>
  );
};

export default Sidebar;
