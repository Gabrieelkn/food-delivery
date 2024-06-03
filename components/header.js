import NavigationBar from "./navbar";
import SearchBar from "./searchBar";
import Logo from "../public/logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/">
          <Image src={Logo} width={80} height={80} alt="logo" />
        </Link>
        <SearchBar />
        <NavigationBar />
      </div>
    </header>
  );
}
