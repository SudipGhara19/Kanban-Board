import React, { useEffect, useState } from 'react';
import { TbCirclePlusFilled } from 'react-icons/tb';
import AddTaskModal from '../components/AddTaskModal';
import { FaCodePullRequest } from 'react-icons/fa6';
import { RiErrorWarningLine, RiProgress3Line } from 'react-icons/ri';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';
import EditModal from '../components/EditModal';
import Column from '../components/Column';
import Task from '../components/Task';

function KanbanBoard() {

    const [tasks, setTasks] = useState({
        requested: ["heelooo", "my name is sudip"],
        inProgress: ["hello"],
        done: ["hello"],
    });
    const [isAdding, setIsAdding] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeletedVisible] = useState(false);
    const [editingTask, setEditingTask] = useState({ category: "", index: null, content: "" });
    const [taskToDelete, setTaskToDelete] = useState(null);


    // Load tasks from localStorage when the component mounts
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("kanbanTasks"));
        if (savedTasks) {
            setTasks(savedTasks);
        }
    }, []);

    // Save tasks to localStorage whenever `tasks` changes
    useEffect(() => {
        if (tasks) { // Ensure tasks are defined before saving
            localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
        }
    }, [tasks]);



    const handleEditClick = (category, index, content) => {
        setEditingTask({ category, index, content });
        setEditModalVisible(true);
    };

    const updateTask = (updatedContent) => {
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };
            updatedTasks[editingTask.category][editingTask.index] = updatedContent;
            return updatedTasks;
        });
        setEditModalVisible(false); // Close the modal
    };


    const handleShowDeleteModal = (task, category, index) => {
        setDeletedVisible(true);
        setTaskToDelete({ task, category, index });
    }


    const handleDeleteTask = ({ task, category, index }) => {
        const updatedTasks = { ...tasks };
        updatedTasks[category].splice(index, 1);
        setTasks(updatedTasks);
        setDeletedVisible(false);
    };


    const moveTask = (draggedItem, targetCategory) => {
        if (draggedItem.category === targetCategory) return;

        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };

            updatedTasks[draggedItem.category].splice(draggedItem.index, 1);

            updatedTasks[targetCategory].push(draggedItem.task);

            return updatedTasks;
        });
    };


    const handleDrop = (item, newCategory) => {
        setTasks((prevTasks) => {
            const updatedTasks = { ...prevTasks };

            const taskIndex = updatedTasks[item.category].findIndex((t) => t === item.content);
            if (taskIndex > -1) {
                updatedTasks[item.category].splice(taskIndex, 1);
            }

            updatedTasks[newCategory].push(item.content);

            return updatedTasks;
        });
    };



    return (
        <>
            <div className="w-screen h-screen py-5">
                <div className="h-auto w-full mx-auto flex flex-col items-center max-w-screen-xl">
                    <h1 className="w-[70%] mx-auto text-center text-5xl font-semibold py-4 bg-transparent text-zinc-50 border-[1px] border-zinc-200 rounded-sm">
                        Kanban Board
                    </h1>

                    <div className="w-full h-full mx-10 flex justify-evenly">

                        {/* ---------------------------------- REQUESTED Section -------------------------------- */}
                        <Column category="requested" tasks={tasks.requested} moveTask={moveTask} handleDrop={handleDrop}>
                            <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#4cb5ff] to-[#0248d5] relative sticky top-0 z-10 flex justify-center items-center">
                                <FaCodePullRequest className='text-white mr-2' size={20} />
                                <span>Requested</span>
                                <TbCirclePlusFilled
                                    className='absolute text-zinc-200 top-2 right-2 hover:text-zinc-50 hover:scale-110 transition-all ease-in-out duration-300'
                                    size={35}
                                    onClick={() => setIsAdding(true)} />
                            </h1>
                            {tasks.requested.map((t, i) => (
                                <Task
                                    key={i}
                                    task={t}
                                    category="requested"
                                    index={i}
                                    onEditClick={() => handleEditClick("requested", i, t)}
                                    moveTask={moveTask}
                                    onDeleteClick={handleShowDeleteModal}
                                />
                            ))}
                        </Column>



                        {/* ---------------------------------- IN-PROGRESS Section -------------------------------- */}
                        <Column category="inProgress" tasks={tasks.inProgress} moveTask={moveTask} handleDrop={handleDrop}>
                            <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#e2d256] to-[#f39f18] relative sticky top-0 z-10 flex justify-center items-center">
                                <RiProgress3Line className='text-white mr-2' size={30} />
                                <span>In Progress</span>
                            </h1>
                            {tasks.inProgress.map((t, i) => (
                                <Task
                                    key={i}
                                    task={t}
                                    category="inProgress"
                                    index={i}
                                    onEditClick={() => handleEditClick("inProgress", i, t)}
                                    moveTask={moveTask}
                                    onDeleteClick={handleShowDeleteModal}
                                />
                            ))}
                        </Column>

                        {/* ---------------------------------- DONE Section -------------------------------- */}
                        <Column category="done" tasks={tasks.done} moveTask={moveTask} handleDrop={handleDrop}>
                            <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#52d86b] to-[#03981f] relative sticky top-0 z-10 flex justify-center items-center">
                                <IoCheckmarkDoneCircle className='text-white mr-2' size={30} />
                                <span>Done</span>
                            </h1>
                            {tasks.done.map((t, i) => (
                                <Task
                                    key={i}
                                    task={t}
                                    category="done"
                                    index={i}
                                    onEditClick={() => handleEditClick("done", i, t)}
                                    moveTask={moveTask}
                                    onDeleteClick={handleShowDeleteModal}
                                />
                            ))}
                        </Column>
                    </div>
                </div>
            </div>

            {isAdding && <AddTaskModal showModal={setIsAdding} setTasks={setTasks} />}
            {editModalVisible && (
                <EditModal
                    task={editingTask.content}
                    onClose={() => setEditModalVisible(false)}
                    onSave={updateTask}
                />
            )}

            {deleteModalVisible && (
                <div className="fixed inset-0 text-zinc-900 bg-white bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white w-[90%] md:w-[40%] p-6 rounded-lg shadow-lg relative flex flex-col items-center">
                        <button
                            className="absolute top-1 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                            onClick={() => setDeletedVisible(false)}
                        >
                            &times;
                        </button>
                        <RiErrorWarningLine className="inline-block text-gray-400" size={50} />
                        <h1 className='font-semibold text-center text-zinc-800 text-2xl my-4'>Task already <span className='font-bold'>done</span>. <br />
                            Want to delete this task?
                        </h1>
                        <div className='flex justify-center gap-6'>
                            <button
                                onClick={() => handleDeleteTask(taskToDelete)}
                                className='bg-red-500 px-5 py-2 my-4 font-semibold text-zinc-100 hover:text-white hover:bg-red-700 hover:scale-105 transition-all ease-in-out duration-300 rounded' >
                                Yes, delete
                            </button>
                            <button
                                onClick={() => setDeletedVisible(false)}
                                className='bg-gray-400 px-5 py-2 my-4 font-semibold text-zinc-800 hover:text-zinc-100 hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-300 rounded' >
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default KanbanBoard;
