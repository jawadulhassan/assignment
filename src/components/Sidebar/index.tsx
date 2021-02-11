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

const Sidebar: FC<any> = (): any => {
  let albumSelector: any = [];
  albumSelector = useContext(AlbumContext);

  const [searchText, setSearchText] = useState('');
  const [albumList, setAlbumList] = useState(
    albumSelector?.selectedAlbumList || []
  );

  useEffect(() => {
    searchText !== ''
      ? handleSearch(searchText)
      : setAlbumList(albumSelector?.selectedAlbumList);
  }, [searchText]);

  useEffect(() => {
    setAlbumList(albumSelector?.selectedAlbumList);
  }, [albumSelector?.selectedAlbumList]);

  const handleSearch = (text: string) => {
    let newArr = albumSelector?.selectedAlbumList.filter((item: any) =>
      item.trackName.toLowerCase().includes(text.toLowerCase())
    );

    setAlbumList(newArr);
  };

  const deleteHandler = (index: number) => {
    const { selectedAlbumList, setSelectedAlbumList } = albumSelector;
    let arr = [...selectedAlbumList];
    arr.splice(index, 1);
    setSelectedAlbumList(arr);
  };

  return (
    <div className="sidebar">
      <div className="sidebarOption">
        <LibraryMusic />
        <h4>Your Library</h4>
      </div>
      <br />
      <strong className="sidebar__title">ALBUMS</strong>
      <hr />
      {albumSelector?.selectedAlbumList.length > 0 && (
        <div className="header__left" style={{ margin: 12 }}>
          <input
            type="text"
            value={searchText}
            placeholder="Search for Artists"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      )}
      {albumList.length > 0 &&
        albumList.map((playlist: any, index: number) => (
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
      {albumList.length === 0 && (
        <div className="flex-align-items">
          <img
            alt="blank icon"
            src="static/images/blank.svg"
            className="illustration-sizing-small"
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
