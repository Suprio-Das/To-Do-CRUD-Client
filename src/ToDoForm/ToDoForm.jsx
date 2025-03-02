const ToDoForm = () => {
    return (
        <div>
            <h1 className="text-center text-xl font-semibold">List Your Work</h1>
            <div className="w-3/5 mx-auto">
                <form className="flex flex-col items-center gap-2">
                    <input type="text" placeholder="Meeting at 3:00 PM" className="input" />
                    <input type="textarea" placeholder="Meeting at 3:00 PM" className="textarea" />
                    <button className="btn">Add To List</button>
                </form>
            </div>
        </div>
    );
};

export default ToDoForm;