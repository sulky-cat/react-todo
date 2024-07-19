import Search from "./filter/Search";
import Select from "./filter/Select";
import moon from "/img/svg/moon.svg";
import sun from "/img/svg/sun.svg";
import { useContext } from "react";
import { Theme } from "../context/Theme";
import ButtonWithImg from "./UI/ButtonWithImg";

export default function Heading({ filter, setFilter, setSearchNote }) {
  const { theme, changeTheme } = useContext(Theme);

  const icon = theme === "light" ? moon : sun;

  return (
    <div className="heading">
      <Search setSearchNote={setSearchNote} />
      <div className="heading__settings">
        <Select filter={filter} setFilter={setFilter} />
        <ButtonWithImg
          onClick={changeTheme}
          className="heading__theme-state"
          src={icon}
          alt="Change theme"
        />
      </div>
    </div>
  );
}
