import { PlainIcon } from "../../assets/icons";
import { CompainFilter } from "../CompainFilter";
import { CostFilter } from "../CostFilter";
import { TicketsList } from "../Tickets";
import { TransferFilter } from "../TransferFilter";
import style from "./style.module.scss";

export const MainPage = () => {
  return (
    <div className={style.page}>
      <PlainIcon />
      <div className={style.container}>
        <div className={style.filters}>
          <TransferFilter />
          <CompainFilter />
        </div>
        <div className={style.content}>
          <CostFilter />
          <TicketsList />
        </div>
      </div>
    </div>
  );
};
