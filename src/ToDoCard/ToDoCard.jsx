import React from 'react';

const ToDoCard = ({ singleToDo }) => {
    console.log(singleToDo)
    return (
        <div className='p-5 border-2 border-base-300 rounded-lg max-h-52'>
            <h2 className='font-semibold my-2'>{singleToDo.name}</h2>
            <p className='text-sm text-justify'>{singleToDo.description}</p>
        </div>
    );
};

export default ToDoCard;