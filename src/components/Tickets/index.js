import { Ticket } from "./Ticket";
import tickets from "../../assets/data/tickets.json";

export const TicketsList = () => {
  return (
    <>
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} />
      ))}
    </>
  );
};
