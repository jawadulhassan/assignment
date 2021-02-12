import { FC, useState, useContext } from 'react';

import AlbumContext from '../../../shared/contexts/albumContext';

const Album: FC<any> = ({ track }: any): any => {
  let albumSelector: any = {};
  albumSelector = useContext(AlbumContext);

  const [selectedRow, setSelectedRow] = useState(false);

  // adding item into global context for keeping track of favourites
  const selectionHandler = (item: any) => {
    const { selectedAlbumList, setSelectedAlbumList } = albumSelector;
    let itemFound =
      selectedAlbumList &&
      selectedAlbumList.find(
        (instance: any) => instance.trackId === item?.trackId
      );
    if (itemFound) {
      return;
    }
    let arr = selectedAlbumList ? [...selectedAlbumList] : [];
    arr.push(item);
    setSelectedAlbumList(arr);
  };

  return (
    <div
      className="songRow"
      onMouseEnter={(): void => setSelectedRow(true)}
      onMouseLeave={(): void => setSelectedRow(false)}
    >
      <div className="flex-row">
        <img src={track.artworkUrl100} alt="" className="songRow__album" />
        <div className="songRow__info">
          <h1>{track.trackName}</h1>
          <p>
            {track.artistName} - {track.collectionName}
          </p>
        </div>
      </div>

      {selectedRow && (
        <div
          className="flex-align-items pointer"
          onClick={(): void => selectionHandler(track)}
        >
          <p>Add to Favourites</p>
          <img
            className="small__icon"
            src="static/images/add.svg"
            alt="add icon"
          />
        </div>
      )}
    </div>
  );
};

export default Album;
