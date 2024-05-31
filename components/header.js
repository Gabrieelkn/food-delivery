import "../styles/index.css";
import NavigationBar from "./navbar";
import SearchBar from "./searchBar";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <SearchBar />
        <NavigationBar />
      </div>
    </header>
  );
}
