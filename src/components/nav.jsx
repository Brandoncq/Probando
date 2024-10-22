import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
export const Navbar = () => {
  const [menuopen, setmenu] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [scrolled, setScrolled] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full sticky top-0 z-20 flex items-center justify-between transition-all ease-in-out duration-1000 ${
        scrolled ? "bg-slate-600 px-2 py-2" : "bg-slate-900 py-1"
      }`}
    >
      <nav className="w-full flex justify-between">
        <Link to="/" className="title" onClick={handleScrollToTop}>
          Inicio
        </Link>
        <div
          className="menu"
          onClick={() => {
            setmenu(!menuopen);
          }}
        >
          <i className="bx bx-menu">&equiv;</i>
          <span></span>
          <span></span>
        </div>
        <ul className={menuopen ? "open" : ""}>
          <li className="list-none">
            <NavLink to="/Uno" onClick={handleScrollToTop}>
              Ejercicio 1
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/Dos" onClick={handleScrollToTop}>
              Ejercicio 2
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to="/Tres" onClick={handleScrollToTop}>
              Ejercicio 3
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
