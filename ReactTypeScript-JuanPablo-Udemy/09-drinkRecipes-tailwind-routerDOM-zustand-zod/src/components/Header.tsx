import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { /*Link,*/ NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export const Header = () => {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });

  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);
  const searchRecipes = useAppStore((state) => state.searchRecipes);
  const showNotification = useAppStore((state) => state.showNotification);

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validar
    if (Object.values(searchFilters).includes("")) {
      showNotification({
        text: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    //Consultar las recetas
    searchRecipes(searchFilters);
  };

  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="px-5 py-16 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <img src="/logo.svg" alt="logotipo" className="w-32" />
          </div>

          <nav className="flex gap-4">
            {/* <Link to="/" className="font-bold text-white uppercase">
              Inicio
            </Link>
            <Link to="/favoritos" className="font-bold text-white uppercase">
              Favoritos
            </Link> */}

            {/* Cuando usar Link o NavLink: navlink tiene acceso a un callback que permite detectar la pagina actual, es muy util si se quiere resaltar la pagina en la cual es encuentra el usuario */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-orange-500 uppercase"
                  : "font-bold text-white uppercase"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-orange-500 uppercase"
                  : "font-bold text-white uppercase"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>

        {isHome && (
          <form
            className="p-10 my-32 space-y-6 bg-orange-400 rounded-lg shadow md:w-1/2 2xl:w-1/3"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-lg font-extrabold text-white uppercase"
              >
                Nombre o Ingredientes
              </label>

              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="w-full p-3 rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe"
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-lg font-extrabold text-white uppercase"
              >
                Categoria
              </label>

              <select
                id="category"
                name="category"
                className="w-full p-3 rounded-lg focus:outline-none"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value="">-- Seleccione --</option>
                {categories.drinks.map((category) => (
                  <option
                    value={category.strCategory}
                    key={category.strCategory}
                  >
                    {category.strCategory}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Recetas"
              className="w-full p-2 font-extrabold text-white uppercase bg-orange-800 rounded-lg cursor-pointer hover:bg-orange-900"
            />
          </form>
        )}
      </div>
    </header>
  );
};
