import React, { useEffect, useState } from 'react';
import { TbCirclePlusFilled } from 'react-icons/tb';
import AddTaskModal from '../components/AddTaskModal';
import { FaCodePullRequest } from 'react-icons/fa6';
import { RiErrorWarningLine, RiProgress3Line } from 'react-icons/ri';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';
import EditModal from '../components/EditModal';

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


    const handleDeleteTask = ({ task, category, index }) => {
        const updatedTasks = { ...tasks };
        updatedTasks[category].splice(index, 1);
        setTasks(updatedTasks);
        setDeletedVisible(false);
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
                        <div className="w-[25%] h-[70vh] bg-slate-300 my-4 rounded-md overflow-y-auto scroll-bar">
                            <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#4cb5ff] to-[#0248d5] relative sticky top-0 z-10">
                                Requested
                                <TbCirclePlusFilled
                                    className='absolute text-zinc-200 top-2 right-2 hover:text-zinc-50 hover:scale-110 transition-all ease-in-out duration-300'
                                    size={35}
                                    onClick={() => setIsAdding(true)} />
                            </h1>

                            {tasks.requested && tasks.requested.length > 0 && (
                                tasks.requested.map((t, i) => (
                                    <div
                                        key={i}
                                        className="m-3 text-zinc-800 text-sm px-2 py-4 bg-white flex justify-between items-center gap-2 rounded-md relative group hover:scale-105 transition-all ease-in-out duration-300"
                                    >
                                        <div className="flex items-center gap-2">
                                            <FaCodePullRequest className="text-blue-600 flex-shrink-0" size={15} />
                                            <p className="leading-5 select-none">{t}</p>
                                        </div>
                                        <MdModeEdit
                                            onClick={() => handleEditClick("requested", i, t)}
                                            className="absolute right-2 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500 ease-in-out cursor-pointer"
                                            size={20}
                                        />
                                    </div>
                                ))
                            )}
                        </div>


                        {/* ---------------------------------- IN-PROGRESS Section -------------------------------- */}
                        <div className="w-[25%] h-[70vh] bg-slate-300 my-4 rounded-md overflow-y-auto scroll-bar">
                            <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#ede155] to-[#f39f18] relative sticky top-0 z-10">
                                In progress
                            </h1>

                            {tasks.inProgress && tasks.inProgress.length > 0 && (
                                tasks.inProgress.map((t, i) => (
                                    <div
                                        key={i}
                                        className="m-3 text-zinc-800 text-sm px-2 py-4 bg-white flex justify-between items-center gap-2 rounded-md relative group hover:scale-105 transition-all ease-in-out duration-300"
                                    >
                                        <div className="flex items-center gap-2">
                                            <RiProgress3Line className="text-[#f39f18] flex-shrink-0" size={20} />
                                            <p className="leading-5 select-none">{t}</p>
                                        </div>
                                        <MdModeEdit
                                            onClick={() => handleEditClick("inProgress", i, t)}
                                            className="absolute right-2 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500 ease-in-out cursor-pointer"
                                            size={20}
                                        />
                                    </div>
                                ))
                            )}
                        </div>

                        {/* ---------------------------------- DONE Section -------------------------------- */}
                        <div className="w-[25%] h-[70vh] bg-slate-300 my-4 rounded-md overflow-y-auto scroll-bar">
                            <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#6af283] to-[#03981f] relative sticky top-0 z-10">
                                done
                            </h1>

                            {tasks.done && tasks.done.length > 0 && (
                                tasks.done.map((t, i) => (
                                    <div
                                        key={i}
                                        className="m-3 text-zinc-800 text-sm px-2 py-4 bg-white flex justify-between items-center gap-2 rounded-md relative group hover:scale-105 transition-all ease-in-out duration-300"
                                    >
                                        <div className="flex items-center gap-2">
                                            <IoCheckmarkDoneCircle className="text-[#03981f] flex-shrink-0" size={20} />
                                            <p className="leading-5 select-none">{t}</p>
                                        </div>
                                        <MdDeleteSweep
                                            onClick={() => {
                                                setTaskToDelete({ task: t, category: 'done', index: i });
                                                setDeletedVisible(true);
                                            }}
                                            className="absolute right-2 text-red-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500 ease-in-out cursor-pointer"
                                            size={20}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
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
