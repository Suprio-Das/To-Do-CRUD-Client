const ToDoForm = () => {
    return (
        <div>
            <h1 className="text-center text-xl font-semibold my-2">List Your Work</h1>
            <div className="mx-auto flex justify-center items-center w-[30%]">
                <form className="w-full">
                    <div>
                        <input type="text" placeholder="Meeting at 3:00 PM" className="input w-full mt-3" />
                    </div>
                    <div>
                        <input type="textarea" placeholder="Description of the List..." className="textarea w-full mt-3" />
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