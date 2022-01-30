import compains from "../../../assets/data/companies.json";
import s7Logo from "../../../assets/images/S7 Logo.png";
import XiamenAirLogo from "../../../assets/images/XiamenAir Logo.png";

const logos = {
  XiamenAir: XiamenAirLogo,
  "S7 Airlines": s7Logo,
};

export const CompainLogo = ({ id }) => {
  const compain = compains.find((compain) => compain.id === id);

  return <img src={logos[compain.name]} />;
};
