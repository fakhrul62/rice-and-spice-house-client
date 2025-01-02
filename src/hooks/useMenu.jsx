import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("menu.json")
      .then((res) =>
      {
        setMenus(res.data);
        setLoading(false);
      }
      );
  }, [menus]);
  return [menus, loading];
};

export default useMenu;
