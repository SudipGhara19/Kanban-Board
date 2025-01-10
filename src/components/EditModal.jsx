import { useState } from "react";

function EditModal({ task, onClose, onSave }) {
    const [taskName, setTaskName] = useState(task);

    const handleSave = () => {
        onSave(taskName);
    };

    return (
        <div className="fixed inset-0 text-zinc-900 bg-white bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white w-[90%] md:w-[40%] p-6 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                <h1 className="text-2xl font-semibold my-2">Edit Task:</h1>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="w-full border rounded-md p-2 my-4"
                />
                <button
                    onClick={handleSave}
                    className="px-4 py-2 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Save changes
                </button>
            </div>
        </div>
    );
}

export default EditModal;