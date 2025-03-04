import React from 'react';
import { MdModeEdit } from "react-icons/md";

const ToDoCard = ({ singleToDo }) => {
    console.log(singleToDo)
    return (
        <div className='p-5 border-2 border-base-300 rounded-lg max-h-52 flex flex-col'>
            <div className='flex-grow'>
                <h2 className='font-semibold my-2'>{singleToDo.name}</h2>
                <p className='text-sm text-justify'>{singleToDo.description}</p>
            </div>
            <div className='mt-auto'>
                <p className='btn bg-amber-400'>Edit <MdModeEdit /> </p>
            </div>
        </div>

    );
};

export default ToDoCard;