import { useState } from "react";
import Filter from "./components/filter/Filter";
import GridView from "./components/tasks-views/grid/GridView";

import Data from "./data.json";

import "./App.css";
import ListView from "./components/tasks-views/list/ListView";
import ViewSelector from "./components/view-selector/ViewSelector";

export type Task = {
    id: number;
    title: string;
    priority: string;
    description: string;
    author: string;
    dueDate: string;
};

function App() {
    const [priority, setPriority] = useState("all");
    const [selectedView, setSelectedView] = useState("grid");

    const views = ["Grid", "List"];

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
                ) : (
                    <ListView
                        data={{ tasks: Data.tasks, priority: priority }}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
