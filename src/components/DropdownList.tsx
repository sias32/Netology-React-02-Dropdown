import React, { useState } from 'react';
import DropdownItem from './DropdownItem';
import { onSelectType } from '../types/DropdownItem.types';

const DropdownList: React.FC = React.memo(() => {
  const items: string[] = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  const [selectItem, setItem] = useState<string>(items[0]);

  const HandleClick: onSelectType = React.useCallback(
    (event) => setItem(event.currentTarget.text),
    [],
  );

  return (
    <ul data-id="dropdown" className="dropdown">
      {items.map((item) => (
        <DropdownItem
          key={item}
          item={item}
          select={item === selectItem ? true : false}
          onSelect={HandleClick}
        />
      ))}
    </ul>
  );
});

export default DropdownList;
