import { Task } from "../../../App";
import { returnTask } from "../../../App";
import { AiFillAlert, AiFillFire, AiOutlineWarning } from "react-icons/ai";
import { IoIosSnow } from "react-icons/io";
import classNames from "classnames";

import groupViewCSS from "./GroupView.module.css";

type GroupViewPropsData = {
    data: {
        tasks: Task[];
        priority: string;
    };
};

const GROUP_VIEW = "group";

function returnGroup(priorityGroup: string, index: number, tasks: Task[]) {
    return (
        <div key={index} className={groupViewCSS["inner-group"]}>
            <div className={groupViewCSS.header}>
                <h2>
                    {priorityGroup.toLowerCase() === "high" ? (
                        <AiFillAlert
                            className={classNames({
                                [groupViewCSS.alert]: true,
                                [groupViewCSS.icon]: true,
                            })}
                        />
                    ) : priorityGroup.toLowerCase() === "medium" ? (
                        <AiFillFire
                            className={classNames({
                                [groupViewCSS.fire]: true,
                                [groupViewCSS.icon]: true,
                            })}
                        />
                    ) : priorityGroup.toLowerCase() === "low" ? (
                        <IoIosSnow
                            className={classNames({
                                [groupViewCSS.snow]: true,
                                [groupViewCSS.icon]: true,
                            })}
                        />
                    ) : <AiOutlineWarning className={groupViewCSS.icon} />}
                    {priorityGroup}
                </h2>
            </div>
            <div className={groupViewCSS.tasks}>
                {tasks.map((task) => {
                    if (task.priority === priorityGroup.toLocaleLowerCase()) {
                        return returnTask(task, GROUP_VIEW);
                    }
                })}
            </div>
        </div>
    );
}

function GroupView(props: GroupViewPropsData) {
    const priorities = ["High", "Medium", "Low", "None"];

    return (
        <div className={groupViewCSS.group}>
            {priorities.map((priorityGroup, index) => {
                if (props.data.priority === "all") {
                    return returnGroup(priorityGroup, index, props.data.tasks);
                } else {
                    if (
                        priorityGroup.toLocaleLowerCase() ===
                        props.data.priority
                    ) {
                        return returnGroup(
                            priorityGroup,
                            index,
                            props.data.tasks
                        );
                    }
                }
            })}
        </div>
    );
}

export default GroupView;
