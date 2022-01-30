import { CompainLogo } from "../CompainLogo";
import { Segment } from "../Segment";
import style from "./style.module.scss";

export const Ticket = ({ ticket }) => {
  const { companyId, segments, price } = ticket;

  return (
    <div className={style.ticket}>
      <div className={style.ticket__header}>
        <p className={style.price}>{price}</p>
        <div className={style.compainLogo}>
          <CompainLogo id={companyId} />
        </div>
      </div>
      {segments.map((segment) => (
        <Segment id={segment} key={segment} />
      ))}
    </div>
  );
};
