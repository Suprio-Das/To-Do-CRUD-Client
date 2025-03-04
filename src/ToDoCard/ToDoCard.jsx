import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';

const ToDoCard = ({ singleToDo }) => {
    console.log(singleToDo)
    return (
        <div className='p-5 border-2 border-base-300 rounded-lg max-h-52 flex flex-col'>
            <div className='flex-grow'>
                <h2 className='font-semibold my-2'>{singleToDo.name}</h2>
                <p className='text-sm text-justify'>{singleToDo.description}</p>
            </div>
            <div className='mt-auto'>
                <Link className='btn bg-amber-400 mr-2'>Edit <MdModeEdit /> </Link>
                <Link className='btn bg-red-500 mr-2 text-white'>Delete <MdDelete /> </Link>
            </div>
        </div>

    );
};

export default ToDoCard;