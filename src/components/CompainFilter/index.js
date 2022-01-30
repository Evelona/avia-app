import style from "./style.module.scss";
export const CompainFilter = () => {
  return (
    <div className={style.block}>
      <p className={style.block_title}>Компания</p>

      <label className={style.radio}>
        <input name="all" type="radio" className={style.radio__input} />
        <span className={style.radio__box}></span>
        Все
      </label>

      <label className={style.radio}>
        <input name="all" type="radio" className={style.radio__input} />
        <span className={style.radio__box}></span>
        S7 Airlines
      </label>

      <label className={style.radio}>
        <input name="all" type="radio" className={style.radio__input} />
        <span className={style.radio__box}></span>XiamenAir
      </label>
    </div>
  );
};
