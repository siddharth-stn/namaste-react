import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const ResCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="p-2 w-[250px] min-h-full rounded-t bg-gray-200 hover:bg-slate-600 hover:text-white"
    >
      <img
        className="rounded-t"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold my-2">{name}</h3>
      <h4 className="my-2">{cuisines.join(", ")}</h4>
      <h4 className="my-2">{costForTwo}</h4>
      <h4 className="my-2">{avgRating}</h4>
      {loggedInUser}
    </div>
  );
};

// Higher order component
// input - Restaurant card => Restaurant card promoted

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute -left-5 top-1 bg-slate-800 text-white m-2 px-2 rounded">
          Promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default ResCard;
