import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(event) => props.onSubmit(event)}>
      <input
        className="search-input"
        value={props.value}
        onChange={(event) => props.handleSearch(event)}
        name="Search"
        placeholder="Search..."
        type="text"
        autoFocus
      />
    </form>
  );
};

export default Search;
