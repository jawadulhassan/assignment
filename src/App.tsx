import { FC, useState } from 'react';

import { AlbumProvider } from './shared/contexts/albumContext';

import Explore from './components/Explore';
import Sidebar from './components/Sidebar';

import './App.css';

const Dashboard: FC<any> = (): any => {
  const [selectedAlbumList, setSelectedAlbumList] = useState([]);
  return (
    <AlbumProvider value={{ setSelectedAlbumList, selectedAlbumList }}>
      <div className="player__body">
        <Sidebar />
        <Explore />
      </div>
    </AlbumProvider>
  );
};

export default Dashboard;
