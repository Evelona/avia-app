import { Ticket } from "./Ticket";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const TicketsList = () => {
  const allTickets = useSelector((state) => state.tickets);
  const filters = useSelector((state) => state.filters);

  const [tickets, setTickets] = useState(allTickets);

  useEffect(() => {
    let sortedTickets = allTickets;

    if (filters.compainFilter)
      sortedTickets = sortedTickets.filter(
        (tickets) => tickets.companyId === filters.compainFilter
      );

    setTickets(sortedTickets);
  }, [filters]);
  return (
    <>
      {tickets.map((ticket) => (
        <Ticket ticket={ticket} />
      ))}
    </>
  );
};
