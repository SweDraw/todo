import React, {FC, useState} from "react";
import '../style/filter.scss';

export type FilterProps = {
  updateFilter: (newFilter: string) => void;
};

const Filter: FC<FilterProps> = ({updateFilter}) => {
  const [filter, setFilter] = useState('');

  return (
    <input
      type="text"
      className="filter__field"
      name="filter"
      value={filter}
      onChange={(e) => {
        const {value} = e.target;
        setFilter(value);
        updateFilter(value.toLocaleLowerCase());
      }}
    />
  )
};

export default Filter;