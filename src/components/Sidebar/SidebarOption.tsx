import { FC, useState } from 'react';

const SidebarOption: FC<any> = ({
  icon,
  index,
  title,
  searchText,
  deleteHandler,
}: any): any => {
  const [selectedRow, setSelectedRow] = useState(false);

  return (
    <div
      className="sidebarOption"
      onMouseEnter={(): void => setSelectedRow(true)}
      onMouseLeave={(): void => setSelectedRow(false)}
    >
      {!!icon && <img src={icon} alt="" className="sidebarOption__icon" />}
      <p style={{ width: '60%' }}>{title}</p>
      {selectedRow && searchText === '' && (
        <div
          className="pointer remove-wrapper"
          onClick={(): void => deleteHandler(index)}
        >
          <img
            className="small__icon"
            src="static/images/delete.svg"
            alt="delete icon"
          />
        </div>
      )}
    </div>
  );
};

export default SidebarOption;
