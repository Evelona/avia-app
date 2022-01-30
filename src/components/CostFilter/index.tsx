import { useDispatch, useSelector } from "react-redux";
import { setMostFilterValue } from "store/filters";
import cn from "classnames";
import style from "./style.module.scss";

export const CostFilter = () => {
  const dispatch = useDispatch();

  const { mostFilter } = useSelector(
    (state: { filters: { mostFilter: string } }) => state.filters
  );

  const toFilter = (filterOption) => {
    if (mostFilter !== filterOption)
      return dispatch(setMostFilterValue(filterOption));
    dispatch(setMostFilterValue(""));
  };
  return (
    <div className={style.buttonsBlock}>
      <button
        onClick={() => toFilter("chip")}
        className={cn({ [style.active]: mostFilter === "chip" })}
      >
        Самый дешевый
      </button>

      <button
        onClick={() => toFilter("fast")}
        className={cn({ [style.active]: mostFilter === "fast" })}
      >
        Самый быстрый
      </button>
      <button
        onClick={() => toFilter("short")}
        className={cn({ [style.active]: mostFilter === "short" })}
      >
        Оптимальный
      </button>
    </div>
  );
};
