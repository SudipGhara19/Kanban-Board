import React, { useState } from "react";

function AddTaskModal({ showModal, setTasks }) {

    const [newTask, setNewTask] = useState("");

    const addTaskToRequested = () => {
        if (!newTask.trim()) return;
        setTasks((prevTasks) => ({
            ...prevTasks,
            requested: [...prevTasks.requested, newTask],
        }));
        setNewTask("");
        showModal(false);
    };

    return (
        <div className="fixed inset-0 text-zinc-900 bg-white bg-opacity-70 flex items-center justify-center z-50">
            {/* Modal Content */}
            <div className="bg-white w-[90%] md:w-[40%] p-6 rounded-lg shadow-lg relative">
                {/* Close Button */}
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    onClick={() => showModal(false)}
                >
                    &times;
                </button>
                <h2 className="text-2xl text-zinc-900 font-semibold mb-4 text-center">Add New Task</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        id="task"
                        className="w-full border rounded-md p-2"
                        placeholder="Enter task name"
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                    />
                </div>
                <button
                    onClick={addTaskToRequested}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Add Task
                </button>
            </div>
        </div>
    );
}

export default AddTaskModal;
