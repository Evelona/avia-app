import { Ticket } from "./Ticket";
import { useSelector } from "react-redux";

export const TicketsList = () => {
  const tickets = useSelector((state) => state.tickets);
  return (
    <>
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} />
      ))}
    </>
  );
};
