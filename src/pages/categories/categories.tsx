import { PageHero } from "components/UI/pageHero";
import { CategoriesList } from "./categoriesList";

import home_decoration from "../../images/home_decoration.png";
import laptop from "../../images/laptop.png";
import womens_clothing from "../../images/womens_clothing.png";
import phone from "../../images/phone.png";
import mens_clothing from "../../images/mens_clothing.png";
import { title } from "process";

const categoriesData = {
  electronics: [
    {
      title: "Smartphones",
      img: `${phone}`,
      link: "smartphones",
    },
    {
      title: "Laptops",
      img: `${laptop}`,
      link: "laptops",
    },
  ],
  clothing: [
    {
      title: "Women's Dresses",
      img: `${womens_clothing}`,
      link: "womens-dresses",
    },
    {
      title: "Men's Shirts",
      img: `${mens_clothing}`,
      link: "mens-shirts",
    },
  ],
  home_decoration: [
    {
      title: "Home Decoration",
      img: `${home_decoration}`,
      link: "home-decoration",
    },
  ],
};

const Categories = () => {
  return (
    <section>
      <PageHero breadCrumbs={[{ title: "categories", link: "categories" }]}>
        Categories
      </PageHero>
      <div className="main-container">
        <div className="flex flex-col gap-y-8 text-center">
          <div className="flex items-center flex-col">
            <h2 className="category-header">Electronics</h2>
            <CategoriesList categoryData={categoriesData.electronics} />
          </div>
          <div className="flex items-center flex-col">
            <h2 className="category-header">Clothes</h2>
            <CategoriesList categoryData={categoriesData.clothing} />
          </div>
          <div className="flex items-center flex-col">
            <h2 className="category-header">Home Decoration</h2>
            <CategoriesList categoryData={categoriesData.home_decoration} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
