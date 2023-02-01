import { Task } from "../../../App";
import TaskCard from "../../task-card/TaskCard";

import gridViewCSS from "./GridView.module.css";

type GridViewPropsData = {
    data: {
        tasks: Task[];
        priority: string;
    };
};

function GridView(props: GridViewPropsData) {
    return (
        <div className={gridViewCSS.grid}>
            {props.data.tasks.map((task) => {
                if (props.data.priority === "all") {
                    return (
                        <TaskCard
                            key={task.id}
                            data={{
                                id: task.id,
                                title: task.title,
                                priority: task.priority,
                                description: task.description,
                                author: task.author,
                                dueDate: task.dueDate,
                            }}
                        />
                    );
                } else {
                    if (task.priority === props.data.priority) {
                        return (
                            <TaskCard
                                key={task.id}
                                data={{
                                    id: task.id,
                                    title: task.title,
                                    priority: task.priority,
                                    description: task.description,
                                    author: task.author,
                                    dueDate: task.dueDate,
                                }}
                            />
                        );
                    }
                }
            })}
        </div>
    );
}

export default GridView;
