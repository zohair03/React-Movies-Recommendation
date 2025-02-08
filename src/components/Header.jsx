import SearchBar from "./SearchBar";

const Header = ({query}) => {
  return (
    <div className="header">
      <h1>Movies Zone</h1>
      <SearchBar query={query} />
    </div>
  );
};

export default Header;
