import MenuItemCard from "./MenuItemCard";
import useMenu from "../hooks/useMenu";

const PopularMenuSection = () => {
  const [menus] = useMenu();
  const getMenus = menus.filter((menu) => menu.category === "popular");
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="text-center my-10 flex flex-col items-center space-y-2">
        <p className="text-zinc-400">Popular Items</p>
        <h2 className="font-semibold text-3xl text-zinc-900 uppercase border-t border-b tracking-wider border-amber-400">
          Our Menu
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
        {
            getMenus.map(menu=> <MenuItemCard key={menu._id} menu={menu}></MenuItemCard>)
        }
      </div>
      <div className="flex justify-center mt-10">
        <button type="button" className="bg-white text-zinc-950 border border-zinc-950 rounded-full px-10 py-3">View Full Menu</button>
      </div>
    </div>
    
  );
};

export default PopularMenuSection;
