import React from 'react';

function KanbanBoard() {
    return (
        <div className="w-screen h-screen py-5">
            <div className="h-auto w-full mx-auto flex flex-col items-center max-w-screen-xl">
                <h1 className="w-[70%] mx-auto text-center text-5xl font-semibold py-4 bg-transparent text-zinc-50 border-[1px] border-zinc-200 rounded-sm">
                    Kanban Board
                </h1>

                <div className="w-full h-full mx-10 flex justify-evenly">
                    <div className="w-[25%] h-[70vh] bg-slate-300 my-4 rounded-md overflow-y-auto">
                        <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#4cb5ff] to-[#0248d5] ">
                            Requested
                        </h1>
                    </div>


                    <div className="w-[25%] h-[70vh] bg-slate-300 my-4 rounded-md overflow-y-auto">
                        <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#f0d24d] to-[#f49025]">
                            In progress
                        </h1>
                    </div>
                    <div className="w-[25%] h-[70vh] bg-slate-300 my-4 rounded-md overflow-y-auto">
                        <h1 className="text-white uppercase text-center font-semibold py-3 bg-gradient-to-r from-[#50d16a] to-[#049509]">
                            Done
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KanbanBoard;
