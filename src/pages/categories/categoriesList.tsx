import { CategoriesCard } from "./categoriesCard";

interface ICategoryItem {
  title: string;
  img: string;
  link: string;
}

interface ICategoryData {
  categoryData: ICategoryItem[];
}
//
export const CategoriesList: React.FC<ICategoryData> = ({ categoryData }) => {
  return (
    <div>
      <ul className="flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row gap-x-[30px]">
        {categoryData.map((category: ICategoryItem) => {
          return (
            <CategoriesCard
              key={category.title}
              title={category.title}
              img={category.img}
              link={category.link}
            />
          );
        })}
      </ul>
    </div>
  );
};
