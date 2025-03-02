import ToDoForm from '../ToDoForm/ToDoForm';
import './Home.css'
import { GiNotebook } from "react-icons/gi";

const Home = () => {
    return (
        <div>
            <div className="mx-auto home-banner p-11">
                <h1 className='text-4xl text-center text-white font-semibold flex justify-center gap-3'><GiNotebook /> Your To-Do</h1>
                <p className='text-2xl text-center text-white'>Don't Forget Anymore, Save Here!</p>
            </div>
            <div className='mt-3'>
                <ToDoForm></ToDoForm>
            </div>
            <div>
                <h2 className='ms-5 text-xl my-11 font-semibold border-b-4 border-pink-500 w-32'>Listed To-Do</h2>
            </div>
        </div>
    );
};

export default Home;