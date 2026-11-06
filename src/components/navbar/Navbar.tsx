import logo from "../../assets/img/logo.svg";
import Navlinks from "./Navbarcompo/Navlinks";
import { ShoppingBag } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

function Navbar() {
  return (
    <nav className="flex px-[4%] py-5 top-0 justify-between items-center absolute w-full z-30 transition-all duration-300">
      {/* Brand / Logo */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="h-[6.5vh] w-auto drop-shadow-sm brightness-100 dark:brightness-110 transition-all duration-300"
        />
      </div>

      {/* Luxury Navigation Links Pill */}
      <div className="hidden md:flex gap-8 items-center bg-white/40 dark:bg-black/30 backdrop-blur-2xl px-8 py-3 rounded-full border border-black/8 dark:border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.4)] transition-all duration-300">
        <Navlinks name="Home" link="#" />
        <Navlinks name="Category" link="#" />
        <Navlinks name="Support" link="#" />
        <Navlinks name="My Profile" link="#" />
      </div>

      {/* Luxury Controls: Mode Toggle + Cart */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <button
          type="button"
          className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/40 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 text-foreground shadow-sm hover:border-primary/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Shopping Bag"
        >
          <ShoppingBag className="w-4 h-4 text-foreground/80 group-hover:text-foreground transition-colors" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-background" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
