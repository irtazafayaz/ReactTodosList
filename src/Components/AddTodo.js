import React, { useState } from "react";

const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Please Enter both Title and Description!")
        }
        props.addTodo(title,desc)
    }

    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={submit} >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Email address</label>
                    <input type="title" className="form-control" value={title} onChange = {(e) => {setTitle(e.target.value)}} id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Password</label>
                    <input type="password" className="form-control" id="desc" value={desc} onChange = {(e) => {setDesc(e.target.value)}} />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
