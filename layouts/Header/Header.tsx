import { HeaderTop } from "./HeaderTop";
import { HeaderBottom } from "./HeaderBottom";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-10 w-full bg-white">
      <nav
        role="navigation"
        className="container flex flex-col py-4 sm:space-y-6"
      >
        <HeaderTop />
        <HeaderBottom />
      </nav>
    </header>
  );
};

export default Header;
