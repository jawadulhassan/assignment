import { FC } from 'react';

const Header: FC<any> = ({ searchText, setSearchText }: any): any => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="small__icon"
          src="static/images/search.svg"
          alt="search icon"
        />
        <input
          type="text"
          name="searchArtist"
          value={searchText}
          placeholder="Search for Artists"
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Header;
