import React from "react";

const Categories = () => {

  const categories = [
    { id: 1, title: "Все" },
    { id: 2, title: "Мясные" },
    { id: 3, title: "Вегетарианская" },
    { id: 4, title: "Гриль" },
    { id: 5, title: "Острые" },
    { id: 6, title: "Закрытые" }
  ]

  const [activeIndex, setActiveIndex] = React.useState(0)
  const onClickActiveCategory = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
      {categories.map((category, index) => (
          <li
            onClick={() => onClickActiveCategory(index)}
            className={activeIndex === index ? 'active' : ''}
            key={category.id}
          >
            {category.title}
          </li>
      ))}
      </ul>
    </div>
  );
};

export default Categories;
