import { Task } from "../../../App";
import { returnTask } from "../../../App";

import gridViewCSS from "./GridView.module.css";

type GridViewPropsData = {
    data: {
        tasks: Task[];
        priority: string;
    };
};

const GRID_VIEW = "grid";

function GridView(props: GridViewPropsData) {
    return (
        <div className={gridViewCSS.grid}>
            {props.data.tasks.map((task) => {
                if (props.data.priority === "all") {
                    return returnTask(task, GRID_VIEW);
                } else {
                    if (task.priority === props.data.priority) {
                        return returnTask(task, GRID_VIEW);
                    }
                }
            })}
        </div>
    );
}

export default GridView;
