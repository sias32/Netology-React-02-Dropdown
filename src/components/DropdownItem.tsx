import React from 'react';
import DropdownitemProps from '../types/DropdownItem.types';

type Props = Readonly<DropdownitemProps>;

const DropdownItem: React.FC<Props> = React.memo(({ item, select, onSelect }) => {
  return (
    <li className={select === true ? 'active' : undefined}>
      <a href="#" onClick={onSelect}>
        {item}
      </a>
    </li>
  );
});

export default DropdownItem;
