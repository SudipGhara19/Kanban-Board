import { useDrag, useDrop } from 'react-dnd';
import { FaCodePullRequest } from 'react-icons/fa6';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { MdDeleteSweep, MdModeEdit } from 'react-icons/md';
import { RiProgress3Line } from 'react-icons/ri';


function Task({ task, category, index, moveTask, onEditClick, onDeleteClick }) {

    const [{ isDragging }, drag] = useDrag({
        type: "TASK",
        item: { content: task, category: category },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className="m-3 text-zinc-800 text-sm px-2 py-4 bg-white flex justify-between items-center gap-2 rounded-md relative group hover:scale-105 transition-all ease-in-out duration-300"
        >
            <div className="flex items-center gap-2">
                {category === 'requested' && <FaCodePullRequest className="text-blue-600 flex-shrink-0" size={15} />}
                {category === 'inProgress' && <RiProgress3Line className="text-[#f39f18] flex-shrink-0" size={20} />}
                {category === 'done' && <IoCheckmarkDoneCircle className="text-[#03981f] flex-shrink-0" size={20} />}
                <p className="leading-5 select-none">{task}</p>
            </div>

            {category !== 'done' && <MdModeEdit
                onClick={onEditClick}
                className="absolute right-2 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500 ease-in-out cursor-pointer"
                size={20}
            />}
            {category === 'done' && (
                <MdDeleteSweep
                    onClick={() => onDeleteClick(task, category, index)}
                    className="absolute right-2 text-red-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500 ease-in-out cursor-pointer"
                    size={20}
                />
            )}
        </div>
    );
};

export default Task;
