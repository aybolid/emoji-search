import React from "react";
import PropTypes from "prop-types";
import { Input } from "./SearchInput.elements";

const SearchInput = (props) => {
  const handleInputChange = (event) => {
    props.searchText(event);
  };

  return (
    <>
      <Input
        placeholder="Search for emoji here..."
        onChange={handleInputChange}
      />
    </>
  );
};

SearchInput.propTypes = {
  searchText: PropTypes.func,
};

export default SearchInput;
