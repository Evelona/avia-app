import style from "./style.module.scss";

export const CostFilter = () => {
  return (
    <div className={style.buttonsBlock}>
      <button>Самый дешевый</button>
      <button>Самый быстрый</button>
      <button>Оптимальный</button>
    </div>
  );
};
