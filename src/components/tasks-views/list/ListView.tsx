import { Task } from "../../../App";
import { returnTask } from "../../../App";

import listViewCSS from "./ListView.module.css";

type ListViewPropsData = {
    data: {
        tasks: Task[];
        priority: string;
    };
};

const LIST_VIEW = "list";

function ListView(props: ListViewPropsData) {
    return (
        <div className={listViewCSS.list}>
            {props.data.tasks.map((task) => {
                if (props.data.priority === "all") {
                    return returnTask(task, LIST_VIEW);
                } else {
                    if (task.priority === props.data.priority) {
                        return returnTask(task, LIST_VIEW);
                    }
                }
            })}
        </div>
    );
}

export default ListView;
