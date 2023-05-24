type itemType = string;
type selectType = boolean;
type onSelectType = React.MouseEventHandler<HTMLAnchorElement>;

interface DropdownitemProps {
  item: itemType;
  select: selectType;
  onSelect: onSelectType;
}

export default DropdownitemProps;
export type { itemType, selectType, onSelectType };
