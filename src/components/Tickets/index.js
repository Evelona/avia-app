import { Ticket } from "./Ticket";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const TicketsList = ({ compainFilter }) => {
  const allTickets = useSelector((state) => state.tickets);
  const compains = useSelector((state) => state.compains);
  let tickets = [];

  //   useEffect({
  //       if (compainFilter !== 'all') tickets = allTickets.filter(ticket => ticket)

  //   }, [compainFilter]);
  return (
    <>
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} />
      ))}
    </>
  );
};
