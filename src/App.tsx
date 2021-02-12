import { FC, useState } from 'react';

import { AlbumProvider } from './shared/contexts/albumContext';

import Explore from './components/Explore';
import Sidebar from './components/Sidebar';

import './App.css';

const Dashboard: FC<any> = (): any => {
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const [selectedAlbumList, setSelectedAlbumList] = useState([]);

  const toggleNavbar = () => {
    setDisplayNavbar(!displayNavbar);
  };

  //context for keeping the list of albums at application level
  return (
    <AlbumProvider value={{ setSelectedAlbumList, selectedAlbumList }}>
      <div className="player__body">
        {displayNavbar ? (
          <div className="sidebar-mobile">
            <Sidebar toggleNavbar={toggleNavbar} />
          </div>
        ) : (
          <div className="open__menu" onClick={toggleNavbar}>
            <img
              className="small__icon"
              src="static/images/menu.svg"
              alt="menu icon"
            />
          </div>
        )}
        <div className="sidebar">
          <Sidebar />
        </div>
        <Explore />
      </div>
    </AlbumProvider>
  );
};

export default Dashboard;
