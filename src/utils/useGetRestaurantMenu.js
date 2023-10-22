import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";

const useGetRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useGetRestaurantMenu;
