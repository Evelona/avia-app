import style from "./style.module.scss";

const TICKET = {
  id: "73144831-56ec-4c40-89a8-c3b85ef46713",
  price: 8100,
  companyId: "cddfa038-823b-43b1-b18d-395731881077",
  segments: [
    "885e1a50-305f-4106-b075-6c35f8e1f184",
    "11b11717-c5d0-40bc-832c-671c7ce11374",
  ],
};
const SEGMENTS = [
  {
    id: "885e1a50-305f-4106-b075-6c35f8e1f184",
    dateStart: 1643065200000,
    dateEnd: 1643097600000,
    origin: "MOW",
    destination: "HKG",
    stops: ["HKT", "EKV", "PTB"],
    duration: 32400000,
  },
  {
    id: "11b11717-c5d0-40bc-832c-671c7ce11374",
    dateStart: 1643101200000,
    dateEnd: 1643119200000,
    origin: "KRS",
    destination: "EKT",
    stops: ["PTB"],
    duration: 18000000,
  },
];

const getTime = (time) => new Date(time).toLocaleTimeString().slice(0, -3);

const Segment = (props) => {
  const { id } = props;
  const segment = SEGMENTS.find((segment) => segment.id === id);
  console.log(id, segment, SEGMENTS);
  return (
    <div className={style.segment}>
      <div className={style.mainInfo}>
        <p
          className={style.segment__header}
        >{`${segment.origin} - ${segment.destination}`}</p>
        <p className={style.mainInfo__time}>{`${getTime(
          segment.dateStart
        )} - ${getTime(segment.dateEnd)}`}</p>
      </div>
      <div className={style.destination}>
        <p className={style.segment__header}>В пути</p>
        <p className={style.destination__time}>{getTime(segment.duration)}</p>
      </div>
      <div className={style.stops}>
        <p
          className={style.segment__header}
        >{`${segment.stops.length} остановок`}</p>
        <p className={style.stops_names}>{segment.stops.join(", ")}</p>
      </div>
    </div>
  );
};

const Ticket = () => {
  return (
    <div className={style.ticket}>
      <div className={style.ticket__header}>
        <p className={style.price}>{TICKET.price}</p>
        <div className={style.compainLogo}></div>
      </div>
      {TICKET.segments.map((segment) => (
        <Segment id={segment} key={segment} />
      ))}
    </div>
  );
};

export const TicketsList = () => {
  return (
    <>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </>
  );
};
