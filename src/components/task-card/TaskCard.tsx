import { IoIosPerson, IoIosSnow } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { AiFillAlert, AiFillFire, AiOutlineWarning } from "react-icons/ai";
import classNames from "classnames";
import type { Task } from "../../App";

import taskCardCSS from "./TaskCard.module.css";

type TaskPropsData = {
    data: {
        task: Task;
        view: string;
    };
};

const tasksBackgrounds = [
    taskCardCSS.high,
    taskCardCSS.medium,
    taskCardCSS.low,
    taskCardCSS.none,
];

function TaskCard(props: TaskPropsData) {
    const priority = props.data.task.priority;
    const taskBackground =
        priority === "high"
            ? tasksBackgrounds[0]
            : priority === "medium"
            ? tasksBackgrounds[1]
            : priority === "low"
            ? tasksBackgrounds[2]
            : tasksBackgrounds[3];

    const taskPriorityIcon =
        priority === "high" ? (
            <AiFillAlert className={taskCardCSS.alert} />
        ) : priority === "medium" ? (
            <AiFillFire className={taskCardCSS.fire} />
        ) : priority === "low" ? (
            <IoIosSnow className={taskCardCSS.snow} />
        ) : (
            <AiOutlineWarning />
        );

    if (props.data.view === "grid") {
        return (
            <div
                className={classNames({
                    [taskCardCSS.task]: true,
                    [taskBackground]: true,
                })}
            >
                <div className={taskCardCSS.header}>
                    <h3 className={taskCardCSS.title}>
                        {props.data.task.title}
                    </h3>
                    <div className={taskCardCSS.priority}>
                        {taskPriorityIcon}
                    </div>
                </div>
                <div className={taskCardCSS.content}>
                    {props.data.task.description
                        .split(" ")
                        .splice(0, 25)
                        .join(" ")}
                </div>
                <div className={taskCardCSS.footer}>
                    <div className={taskCardCSS.author}>
                        <IoIosPerson className={taskCardCSS.person} />
                        {props.data.task.author}
                    </div>
                    <div className={taskCardCSS["due-date"]}>
                        <BsCalendar2Date className={taskCardCSS.calendar} />
                        {props.data.task.dueDate}
                    </div>
                </div>
            </div>
        );
    }
    if (props.data.view === "list") {
        return (
            <div
                className={classNames({
                    [taskCardCSS.task]: true,
                    [taskCardCSS["list-view"]]: true,
                    [taskBackground]: true,
                })}
            >
                <div className={taskCardCSS.header}>
                    <div className={taskCardCSS.left}>
                        <div className={taskCardCSS.priority}>
                            {taskPriorityIcon}
                        </div>
                        <h3 className={taskCardCSS.title}>
                            {props.data.task.title}
                        </h3>
                    </div>
                    <div className={taskCardCSS.right}>
                        <div className={taskCardCSS.author}>
                            <IoIosPerson className={taskCardCSS.person} />
                            {props.data.task.author}
                        </div>
                        <div className={taskCardCSS["due-date"]}>
                            <BsCalendar2Date className={taskCardCSS.calendar} />
                            {props.data.task.dueDate}
                        </div>
                    </div>
                </div>
                <div className={taskCardCSS.content}>
                    {props.data.task.description
                        .split(" ")
                        .splice(0, 25)
                        .join(" ")}
                </div>
                <div className={taskCardCSS.footer}></div>
            </div>
        );
    } 
    if (props.data.view === "group") {
        return (
            <div
                className={classNames({
                    [taskCardCSS.task]: true,
                    [taskBackground]: true,
                })}
            >
                <div className={taskCardCSS.header}>
                    <h3 className={taskCardCSS.title}>
                        {props.data.task.title}
                    </h3>
                    <div className={taskCardCSS.priority}>
                        {taskPriorityIcon}
                    </div>
                </div>
                <div className={taskCardCSS.content}>
                    {props.data.task.description
                        .split(" ")
                        .splice(0, 25)
                        .join(" ")}
                </div>
                <div className={taskCardCSS.footer}>
                    <div className={taskCardCSS.author}>
                        <IoIosPerson className={taskCardCSS.person} />
                        {props.data.task.author}
                    </div>
                    <div className={taskCardCSS["due-date"]}>
                        <BsCalendar2Date className={taskCardCSS.calendar} />
                        {props.data.task.dueDate}
                    </div>
                </div>
            </div>
        );
    } else {
        return <h3>Problem rendering the task</h3>;
    }
}

export default TaskCard;
