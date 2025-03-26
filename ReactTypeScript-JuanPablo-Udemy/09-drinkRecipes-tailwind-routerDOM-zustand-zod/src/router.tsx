import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./views/IndexPage";
import { FavoritesPage } from "./views/FavoritesPage";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./layouts/NotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritesPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
