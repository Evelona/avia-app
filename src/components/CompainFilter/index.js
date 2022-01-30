import style from "./style.module.scss";
import { setcompainFilterValue } from "../../store/compainFilter";
import { useDispatch, useSelector } from "react-redux";

export const CompainFilter = () => {
  const dispatch = useDispatch();
  const compains = useSelector((state) => state.compains);
  const onChange = ({ target: { value } }) => {
    const currCompainId =
      compains.find((compains) => compains.name === value)?.id || "";
    console.log(currCompainId);
    dispatch(setcompainFilterValue(currCompainId));
  };
  return (
    <div className={style.block}>
      <p className={style.block_title}>Компания</p>

      <label className={style.radio} onChange={onChange}>
        <input
          name="all"
          type="radio"
          value={"all"}
          className={style.radio__input}
        />
        <span className={style.radio__box}></span>
        Все
      </label>

      <label className={style.radio} onChange={onChange}>
        <input
          name="all"
          type="radio"
          className={style.radio__input}
          value={"S7 Airlines"}
        />
        <span className={style.radio__box}></span>
        S7 Airlines
      </label>

      <label className={style.radio} onChange={onChange}>
        <input
          name="all"
          type="radio"
          className={style.radio__input}
          value={"XiamenAir"}
        />
        <span className={style.radio__box}></span>XiamenAir
      </label>
    </div>
  );
};
