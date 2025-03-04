import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';

const ToDoCard = ({ singleToDo }) => {
    return (
        <div className='p-5 border-2 border-base-300 rounded-lg max-h-52 flex flex-col'>
            <div className='flex-grow'>
                <h2 className='font-semibold my-2'>{singleToDo.name}</h2>
                <p className='text-sm text-justify'>{singleToDo.description}</p>
            </div>
            <div className='mt-auto'>
                <Link onClick={() => document.getElementById(`${singleToDo._id}`).showModal()} className='btn bg-amber-400 mr-2'>Edit <MdModeEdit /> </Link>
                <Link className='btn bg-red-500 mr-2 text-white'>Delete <MdDelete /> </Link>
            </div>

            {/* Update Modal */}
            <dialog id={`${singleToDo._id}`} className="modal">
                <div className="modal-box">
                    <div>
                        <form className="w-full">
                            <div>
                                <input type="text" defaultValue={singleToDo.name} name="name" className="input w-full mt-3" />
                            </div>
                            <div>
                                <input type="textarea" defaultValue={singleToDo.description} name="description" className="textarea w-full mt-3" />
                            </div>
                            <div>
                                <input type="submit" value="Update To-Do" className="btn w-full mt-3" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default ToDoCard;