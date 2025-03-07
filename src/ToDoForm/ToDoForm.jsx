import { toast, ToastContainer } from "react-toastify";

const ToDoForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const todo = { name, description };
        console.log({ name, description });
        fetch('http://localhost:5000/todo', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("To-Do added successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
            })
    }
    return (
        <div>
            <h1 className="text-center text-xl font-semibold my-2">List Your Work</h1>
            <div className="mx-auto flex justify-center items-center w-[30%]">
                <form onSubmit={handleSubmit} className="w-full">
                    <div>
                        <input type="text" placeholder="Meeting at 3:00 PM" name="name" className="input w-full mt-3" required />
                    </div>
                    <div>
                        <input type="textarea" placeholder="Description of the List..." name="description" className="textarea w-full mt-3" required />
                    </div>
                    <div>
                        <input type="submit" value="Add to List" className="btn w-full mt-3" />
                    </div>
                </form>
            </div>
            {/* Success toast here */}
            <ToastContainer />
        </div>
    );
};

export default ToDoForm;