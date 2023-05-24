import React, { useState } from 'react';
import DropdownList from './DropdownList';

const Dropdown: React.FC = () => {
  const [openList, setList] = useState<boolean>(true);
  const HandleClick = () => {
    openList === true ? setList(false) : setList(true);
  };

  return (
    <div className="container">
      <div data-id="wrapper" className={'dropdown-wrapper' + (openList === true ? ' open' : '')}>
        <button data-id="toggle" className="btn" onClick={HandleClick}>
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>
        <DropdownList />
      </div>
    </div>
  );
};

export default Dropdown;
