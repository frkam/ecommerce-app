import { NavLink } from "react-router-dom";

export const CategoriesCard: React.FC<{
  title: string;
  img: string;
  link: string;
}> = ({ title, img, link }) => {
  return (
    <NavLink to={`/categories/${link}`} className="min-h-full">
      <div className="items-center flex flex-col w-64 md:w-80 h-[25.5rem] shadow-card rounded-md justify-end p-3">
        <img src={img} alt={title} className="object-cover w-full h-[px]" />
        <h3 className="text-3xl text-text font-josefin-sans font-medium text-center">
          {title}
        </h3>
      </div>
    </NavLink>
  );
};
