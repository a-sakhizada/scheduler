import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

//takes in names, spots, selected, setDay()
export default function DayListItem(props) {

    const dayClass = classnames("day-list__item", {
        "day-list__item--selected": props.selected,
        "day-list__item--full": props.spots === 0
       });

       const formatSpots = function(spots) {
        if (spots === 0) {
          return "no spots remaining"
        } else if (spots === 1) {
          return "1 spot remaining"
        } else {
          return spots + " spots remaining"
      }
    }
       
  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass}>
      <h2 className="text--regular">{props.name}</h2>
      <h2 className="text--light">{formatSpots(props.spots)}</h2>
    </li>
  );
}
