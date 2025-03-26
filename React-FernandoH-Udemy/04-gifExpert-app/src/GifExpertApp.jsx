import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    //categories.push(newCategory);
    setCategories([newCategory, ...categories]); //Una forma
    //setcategories( cat => [...cat, 'Hola Mundo']); //Lo mismo de Otra forma
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif Item */}
    </>
  );
};
