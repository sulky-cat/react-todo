import { useCallback, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import SelectItem from "./SelectItem";

export default function Select({ filter, setFilter }) {
  const [opened, setOpened] = useState(false);
  // Create custom hook for closing select
  const ref = useRef(null);
  const handlerClick = useCallback(() => setOpened(false), []);
  useOutsideClick(ref, handlerClick, opened);

  return (
    <div
      onClick={(e) => setOpened((prev) => !prev)}
      className={
        opened ? "heading__select select select_open" : "heading__select select"
      }
      ref={ref}
    >
      <button className="select__active">{filter}</button>
      <div className="select__items">
        <SelectItem setFilter={setFilter} value="all">
          All
        </SelectItem>
        <SelectItem setFilter={setFilter} value="complete">
          Complete
        </SelectItem>
        <SelectItem setFilter={setFilter} value="incomplete">
          Incomplete
        </SelectItem>
      </div>
    </div>
  );
}
