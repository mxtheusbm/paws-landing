import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="logo" />
        <p className="text-2xl font-bold">Paws</p>
      </div>
      <div className="space-x-12 text-2xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-medium" : ""
          }
        >
          Sobre
        </NavLink>
        <NavLink to="">Petiscos</NavLink>
        <NavLink to="">Brinquedos</NavLink>
        <NavLink to="">Saúde dos Pets</NavLink>
      </div>
      <div>
        <button>+</button>
      </div>
    </header>
  );
}
