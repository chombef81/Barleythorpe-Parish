import { hamburger } from "../assets/icons";
import { headerLogoCutout } from "../assets/images";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header class="padding-x py-8 z-10">
      <nav class="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogoCutout}
            alt="logo"
            width={80}
            height={80}
            class="m-0 w-[80px] h-[80px]"
          />
        </a>
        <ul class="flex-1 flex justify-center items-center gap-16 max-xl:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-gray hover:text-green-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-xl:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
