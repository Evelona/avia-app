import { useState } from "react";
import { PlainIcon } from "../../assets/icons";
import { CompainFilter } from "../../components/CompainFilter";
import { CostFilter } from "../../components/CostFilter";
import { TicketsList } from "../../components/Tickets";
import { TransferFilter } from "../../components/TransferFilter";
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
