import React, { useRef, useState } from "react";
import "./DateSelector.css";

const ocassions = [
    {
        label: "Birthday",
        value: "birthday",
    },
    {
        label: "Anniversary",
        value: "anniversary",
    },
];

const DateSelector = (props) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [date, setDate] = useState(new Date().toDateString());

    const dateRef = useRef(null);

    // split time and date into arrays based on delimiter
    const timeStr = time.toString().split(" ");
    const dateStr = date.toString().split(" ");

    // get date value from input using useRef hook
    const handleClickedDate = () => {
        props.chooseDate(dateRef.current.value);
        // console.log(dateRef.current.value);
    };

    // get ocassion value from select option
    const handleOcassionChange = (e) => {
        props.chooseOcassion(e.target.value);
        // console.log(e.target.value);
    };
    return (
        <div className="reservation__date-selector">
            <div className="reservation__date-selector-date-time">
                <h1 className="title">Date</h1>
                <div className="date-time">
                    <div className="date">{dateStr[2] + " " + dateStr[1] + " " + dateStr[3]}</div>

                    <div className="time">{timeStr[0] + " " + timeStr[1]}</div>
                </div>
            </div>

            {/* add date selector and ocassion selector */}
            {/* get date and ocassion values and pass to parent component */}
            <div className="choose-date">
                <input ref={dateRef} onChange={handleClickedDate} type="date" className="date-selector" />
                {/* provide defalut value: theOcassion */}
                {/* ocassion value is comming from parent and then onchange, send data to parent */}
                <select className="ocassion-selector" value={props.ocassion} onChange={handleOcassionChange}>
                    {ocassions.map((ocassion) => {
                        return <option value={ocassion.value}>{ocassion.label}</option>;
                    })}
                </select>
            </div>
        </div>
    );
};

export default DateSelector;
