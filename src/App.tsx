import { useState } from "react";
import Filter from "./components/filter/Filter";
import ViewSelector from "./components/view-selector/ViewSelector";
import GridView from "./components/tasks-views/grid/GridView";
import ListView from "./components/tasks-views/list/ListView";
import GroupView from "./components/tasks-views/group/GroupView";
import TaskCard from "./components/task-card/TaskCard";

import Data from "./data.json";

import "./App.css";

export type Task = {
    id: number;
    title: string;
    priority: string;
    description: string;
    author: string;
    dueDate: string;
};

export function returnTask(task: Task, view: string) {
    return (
        <TaskCard
            key={task.id}
            data={{
                task: {
                    id: task.id,
                    title: task.title,
                    priority: task.priority,
                    description: task.description,
                    author: task.author,
                    dueDate: task.dueDate,
                },
                view: view,
            }}
        />
    );
}

function App() {
    const [priority, setPriority] = useState("all");
    const [selectedView, setSelectedView] = useState("grid");

    const views = ["Grid", "List", "Group"];

    const priorityFilterValues = ["All", "High", "Medium", "Low", "None"];

    return (
        <div className="App">
            <div className="container">
                <nav>
                    <Filter
                        data={{
                            values: priorityFilterValues,
                            setPriority: setPriority,
                        }}
                    />
                    <ViewSelector
                        data={{
                            views: views,
                            selectedView: selectedView,
                            setSelectedView: setSelectedView,
                        }}
                    />
                </nav>
                {selectedView === "grid" ? (
                    <GridView
                        data={{ tasks: Data.tasks, priority: priority }}
                    />
                ) : selectedView === "list" ? (
                    <ListView
                        data={{ tasks: Data.tasks, priority: priority }}
                    />
                ) : (
                    <GroupView
                        data={{ tasks: Data.tasks, priority: priority }}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
