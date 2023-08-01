import React, { useContext } from "react";
import { categories } from "../utils/constants";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { AppContext } from "../context/ContextApi";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(AppContext);

  const navigate = useNavigate();
  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
      case "home":
        return setSelectCategories(name);
      case "menu":
        return false;
      default:
        break;
    }
  };
  return (
    <div className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all duration-200 ${mobileMenu ? "translate-x-0" : ""}`}>
      <div className="flex flex-col px-5">
        {categories.map((item, index) => (
          <React.Fragment key={index}>
            <LeftNavMenuItem
              text={item.type === "home" ? "Home" : item.name}
              icon={item.icon}
              action={() => {
                clickHandler(item.name, item.type);
                navigate("/");
              }}
              className={`${
                selectCategories === item.name ? "bg-white/[0.15]" : ""
              }`}
            />
            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        ))}
        <hr className="my-5 border-white/[0.2]" />
        <div className="text-white/[0.5] text-[12px]">Clone by: Hari ॐ</div>
      </div>
    </div>
  );
};

export default LeftNav;
