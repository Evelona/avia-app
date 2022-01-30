import { useState } from "react";
import { PlainIcon } from "../../assets/icons";
import { CompainFilter } from "../../components/CompainFilter";
import { CostFilter } from "../../components/CostFilter";
import { TicketsList } from "../../components/Tickets";
import { TransferFilter } from "../../components/TransferFilter";
import style from "./style.module.scss";

export const MainPage = () => {
  const [compainFilter, setCompainFilter] = useState(false);
  return (
    <div className={style.page}>
      <PlainIcon />
      <div className={style.container}>
        <div className={style.filters}>
          <TransferFilter />
          <CompainFilter setCompainFilter={setCompainFilter} />
        </div>
        <div className={style.content}>
          <CostFilter />
          <TicketsList compainFilter={compainFilter} />
        </div>
      </div>
    </div>
  );
};
