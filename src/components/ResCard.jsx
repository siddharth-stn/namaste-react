import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="p-2 w-[250px] min-h-full rounded-t bg-gray-200 hover:bg-slate-600 hover:text-white">
      <img
        className="rounded-t"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold my-2">{name}</h3>
      <h4 className="my-2">{cuisines.join(", ")}</h4>
      <h4 className="my-2">{costForTwo}</h4>
      <h4 className="my-2">{avgRating}</h4>
    </div>
  );
};

export default ResCard;
