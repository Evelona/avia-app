import { Ticket } from "./Ticket";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const TicketsList = () => {
  const allTickets = useSelector((state) => state.tickets);
  const segments = useSelector((state) => state.segments);
  const filters = useSelector((state) => state.filters);

  const [tickets, setTickets] = useState(allTickets);

  const getSegment = (id) => segments.find((segment) => segment.id === id);
  const getTicketDuration = (ticket) =>
    ticket.segments.reduce((acc, currSegment) => {
      const segment = getSegment(currSegment);
      return (
        acc +
        new Date(segment.duration).getMinutes() +
        new Date(segment.duration).getHours() * 60
      );
    }, 0);

  const getTicketSegmentsCount = (ticket) => ticket.segments.length;

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
              const segment = getSegment(currSegmentId);
              return acc + segment.stops.length;
            }, 0)
          );
        })
      );

    if (filters.mostFilter)
      switch (filters.mostFilter) {
        case "chip":
          sortedTickets = [...sortedTickets].sort((a, b) => a.price - b.price);
          break;
        case "fast":
          sortedTickets = [...sortedTickets].sort(
            (a, b) => getTicketDuration(a) - getTicketDuration(b)
          );
        case "short":
          sortedTickets = [...sortedTickets].sort(
            (a, b) => getTicketSegmentsCount(a) - getTicketSegmentsCount(b)
          );
      }
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
