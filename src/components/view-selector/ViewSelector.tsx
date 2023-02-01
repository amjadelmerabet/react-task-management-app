import React from "react";
import classNames from "classnames";

import viewSelectorCSS from "./ViewSelector.module.css";

type ViewSelectorPropsData = {
    data: {
        views: string[];
        selectedView: string;
        setSelectedView: React.Dispatch<React.SetStateAction<string>>;
    };
};

function ViewSelector(props: ViewSelectorPropsData) {
    const handleView = (view: string) => {
        props.data.setSelectedView(view);
    };

    return (
        <div className={viewSelectorCSS.selectors}>
            {props.data.views.map((view, index) => {
                return (
                    <input
                        key={index}
                        className={classNames({
                            [viewSelectorCSS.selector]: true,
                            [viewSelectorCSS.active]:
                                view.toLocaleLowerCase() ===
                                props.data.selectedView
                                    ? true
                                    : false,
                        })}
                        type="button"
                        value={view}
                        onClick={(event) =>
                            handleView(event.currentTarget.value.toLowerCase())
                        }
                    />
                );
            })}
        </div>
    );
}

export default ViewSelector;
