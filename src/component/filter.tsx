import React, {FC, useState} from "react";
import '../style/filter.scss';
import TextField from "./text-field";

export type FilterProps = {
  updateFilter: (newFilter: string) => void;
};

const Filter: FC<FilterProps> = ({updateFilter}) => {
  const [filter, setFilter] = useState('');
  return (
    <TextField
      fieldText="Todo filter"
      nameField="filter"
      isReduxForm={false}
      className="filter__field"
      fieldParameter={{
        value: filter,
        onChange: (e) => {
          const {value} = e.target;
          setFilter(value);
          updateFilter(value.toLocaleLowerCase());
        }
      }}
    />
  )
};

export default Filter;