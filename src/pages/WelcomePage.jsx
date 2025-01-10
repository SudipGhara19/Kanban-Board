import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage() {

    const links = [
        { name: "Linkedin", url: "https://www.linkedin.com/in/sudip-ghara-b24865214/" },
        { name: "Github", url: "https://github.com/SudipGhara19" },
        { name: "Portfolio", url: "https://sudipghara19.github.io/Portfolio/" }
    ]

    return (
        <div className='w-full h-full max-w-screen-xl mx-auto'>
            {/* INFO */}
            <div className='py-10'>
                <h1 className='text-center text-5xl'><span className='font-medium text-sky-500'>Hi</span>, I'm <span className='font-semibold'>SUDIP GHARA</span></h1>
                <p className='text-xl text-center text-zinc-300 mb-3'>MERN Stack Developer</p>
                <div className='mx-auto w-[30%] my-3 flex justify-between'>
                    {links.map((l, i) =>
                        <div className='flex items-center gap-3'>
                            <span style={{ boxShadow: "0 0 0.75em #17b4f1" }} className='h-[6px] w-[6px] rounded-full bg-[#17b4f1]'></span>
                            <Link className='text-zinc-300 hover:text-zinc-50' to={l.url}>
                                {l.name}
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Description */}
            <div className='w-[70%] flex flex-col items-center p-4 mx-auto justify-center border-[1px] border-zinc-400 rounded-lg'>
                <h1 className='text-5xl'>Welcome</h1>
                <h2 className='text-2xl'>To</h2>
                <h3 className='text-3xl'><span className='text-sky-500'>Kanban-Board</span> Project for</h3>
                <img className='w-[20%] py-7 ' src="/logo-3.png" alt="co-logo" />
            </div>



        </div>
    )
}

export default WelcomePage