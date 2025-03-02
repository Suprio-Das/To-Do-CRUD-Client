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
            .then(data => console.log(data))
    }
    return (
        <div>
            <h1 className="text-center text-xl font-semibold my-2">List Your Work</h1>
            <div className="mx-auto flex justify-center items-center w-[30%]">
                <form onSubmit={handleSubmit} className="w-full">
                    <div>
                        <input type="text" placeholder="Meeting at 3:00 PM" name="name" className="input w-full mt-3" />
                    </div>
                    <div>
                        <input type="textarea" placeholder="Description of the List..." name="description" className="textarea w-full mt-3" />
                    </div>
                    <div>
                        <input type="submit" value="Add to List" className="btn w-full mt-3" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ToDoForm;