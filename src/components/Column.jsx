import { useDrop } from "react-dnd";

function Column({ category, tasks, moveTask, children, handleDrop }) {
    const [{ isOver }, drop] = useDrop({
        accept: "TASK",
        drop: (item) => handleDrop(item, category),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            className="w-[25%] h-[70vh] bg-slate-300 my-4 rounded-md overflow-y-auto scroll-bar"
        >
            {children}
        </div>
    );
};

export default Column;
