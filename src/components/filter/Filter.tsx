import React, { useState } from "react";
import classNames from "classnames";

import filterCSS from "./Filter.module.css";

type FilterPropsData = {
    data: {
        values: string[];
        setPriority: React.Dispatch<React.SetStateAction<string>>;
    };
};

function Filter(props: FilterPropsData) {
    const priorityCSS = [
        filterCSS.all,
        filterCSS.high,
        filterCSS.medium,
        filterCSS.low,
        filterCSS.none,
    ];

    const [active, setActive] = useState("all");

    const handlePriority = (priority: string) => {
        props.data.setPriority(priority);
        setActive(priority);
    };

    return (
        <div className={filterCSS.filter}>
            <span className={filterCSS.name}>Priority :</span>
            <ul className={filterCSS.list}>
                {props.data.values.map((filterItem, index) => {
                    return (
                        <li key={index} className={filterCSS.item}>
                            <input
                                type="button"
                                className={classNames({
                                    [filterCSS.button]: true,
                                    [priorityCSS[index]]:
                                        active === filterItem.toLowerCase()
                                            ? true
                                            : false,
                                })}
                                value={filterItem}
                                onClick={(event) =>
                                    handlePriority(
                                        event.currentTarget.value.toLowerCase()
                                    )
                                }
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Filter;
