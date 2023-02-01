import { IoIosPerson, IoIosSnow } from "react-icons/io";
import { BsCalendar2Date } from "react-icons/bs";
import { AiFillAlert, AiFillFire, AiOutlineWarning } from "react-icons/ai";
import classNames from "classnames";
import type { Task } from "../../App";

import taskCardCSS from "./TaskCard.module.css";

type TaskPropsData = {
    data: Task;
};

const tasksBackgrounds = [
    taskCardCSS.high,
    taskCardCSS.medium,
    taskCardCSS.low,
    taskCardCSS.none,
];

const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi aut saepe delectus est sit totam veniam praesentium repellat, dolorem expedita maxime suscipit vitae dolorum, dolores sapiente velit consequatur enim. Accusantium tenetur eaque aut, iusto, ipsam animi necessitatibus deleniti assumenda vel ullam omnis praesentium ipsum aspernatur suscipit neque cupiditate totam id.";

function TaskCard(props: TaskPropsData) {
    const priority = props.data.priority;
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

    return (
        <div
            className={classNames({
                [taskCardCSS.task]: true,
                [taskBackground]: true,
            })}
        >
            <div className={taskCardCSS.header}>
                <h3 className={taskCardCSS.title}>{props.data.title}</h3>
                <div className={taskCardCSS.priority}>{taskPriorityIcon}</div>
            </div>
            <div className={taskCardCSS.content}>
                {props.data.description.split(" ").splice(0, 25).join(" ")}
            </div>
            <div className={taskCardCSS.footer}>
                <div className={taskCardCSS.author}>
                    <IoIosPerson className={taskCardCSS.person} />
                    {props.data.author}
                </div>
                <div className={taskCardCSS["due-date"]}>
                    <BsCalendar2Date className={taskCardCSS.calendar} />
                    {props.data.dueDate}
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
