import { useDispatch } from "react-redux";
import {
  addTransferFilterValue,
  removeTransferFilterValue,
} from "store/filters";
import style from "./style.module.scss";

export const TransferFilter = () => {
  const dispatch = useDispatch();

  const onChange = ({ target }: any) => {
    if (target.checked) {
      dispatch(addTransferFilterValue(target.value));
    } else dispatch(removeTransferFilterValue(target.value));
  };

  return (
    <div className={style.block}>
      <p className={style.block_title}>Количество пересадок</p>

      <label className={style.check} onChange={onChange}>
        <input
          name="all"
          type="checkbox"
          className={style.check__input}
          value={""}
        />
        <span className={style.check__box}></span>
        Все
      </label>

      <label className={style.check} onChange={onChange}>
        <input
          name="all"
          type="checkbox"
          className={style.check__input}
          value={0}
        />
        <span className={style.check__box}></span>
        Без пересадок
      </label>

      <label className={style.check} onChange={onChange}>
        <input
          name="all"
          type="checkbox"
          className={style.check__input}
          value={1}
        />
        <span className={style.check__box}></span>1 пересадка
      </label>

      <label className={style.check} onChange={onChange}>
        <input
          name="all"
          type="checkbox"
          className={style.check__input}
          value={2}
        />
        <span className={style.check__box}></span>2 пересадки
      </label>

      <label className={style.check} onChange={onChange}>
        <input
          name="all"
          type="checkbox"
          className={style.check__input}
          value={3}
        />
        <span className={style.check__box}></span>3 пересадки
      </label>
    </div>
  );
};
