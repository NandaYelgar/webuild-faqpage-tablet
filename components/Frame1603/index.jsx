import React from "react";
import Frame144 from "../Frame144";
import Footer5 from "../Footer5";
import "./Frame1603.css";

function Frame1603(props) {
  const { faqs, rectangle76, frame144Props, footer5Props } = props;

  return (
    <div className="frame-1603">
      <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
      <h1 className="fa-qs valign-text-middle typographyheadlineh4-extrabold-24">{faqs}</h1>
      <img className="rectangle-76" src={rectangle76} />
      <Footer5 {...footer5Props} />
    </div>
  );
}

export default Frame1603;
