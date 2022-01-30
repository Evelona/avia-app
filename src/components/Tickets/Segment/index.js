import style from "./style.module.scss";
import segments from "../../../assets/data/segments.json";

const getTime = (time) => new Date(time).toLocaleTimeString().slice(0, -3);

export const Segment = ({ id }) => {
  const segment = segments.find((segment) => segment.id === id);
  return (
    <div className={style.segment}>
      <div className={style.mainInfo}>
        <p
          className={style.segment__header}
        >{`${segment.origin} - ${segment.destination}`}</p>
        <p className={style.mainInfo__time}>{`${getTime(
          segment.dateStart
        )} - ${getTime(segment.dateEnd)}`}</p>
      </div>
      <div className={style.destination}>
        <p className={style.segment__header}>В пути</p>
        <p className={style.destination__time}>{getTime(segment.duration)}</p>
      </div>
      <div className={style.stops}>
        <p
          className={style.segment__header}
        >{`${segment.stops.length} остановок`}</p>
        <p className={style.stops_names}>{segment.stops.join(", ")}</p>
      </div>
    </div>
  );
};
