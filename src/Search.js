import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form">
      <label htmlFor="searchArea">Search area: </label>
      <input type="search" id="searchArea" />
      <button>Search</button>
    </form>
  );
}
