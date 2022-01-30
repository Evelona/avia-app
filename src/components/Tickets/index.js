import { Ticket } from "./Ticket";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const TicketsList = () => {
  const allTickets = useSelector((state) => state.tickets);
  const segments = useSelector((state) => state.segments);
  const filters = useSelector((state) => state.filters);

  const [tickets, setTickets] = useState(allTickets);

  const isTransferFilterAvalible =
    filters.transferFilter.length !== 0 && !filters.transferFilter.includes("");

  useEffect(() => {
    let sortedTickets = allTickets;

    if (filters.compainFilter)
      sortedTickets = sortedTickets.filter(
        (tickets) => tickets.companyId === filters.compainFilter
      );

    if (isTransferFilterAvalible)
      sortedTickets = sortedTickets.filter((ticket) =>
        filters.transferFilter.some((transfer) => {
          return (
            +transfer ===
            ticket.segments.reduce((acc, currSegmentId) => {
              const segment = segments.find(
                (segment) => segment.id === currSegmentId
              );
              return acc + segment.stops.length;
            }, 0)
          );
        })
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
