"use client"

import React, { useState } from "react";

function page() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submit_handler = (e)=>{
    e.preventDefault();
    setMainTask([...mainTask, { title , desc }]);
    settitle("");
    setdesc("");
    // console.log(mainTask);
  }

  const deleteHandeler = (i) =>{
    let copytask = [...mainTask];
    copytask.splice(i,1);
    setMainTask(copytask);
  }

  let renderTask = <h1 className="bg-zinc-300 p-5 text-black rounded">No Task Available</h1>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t , i) =>{
      return(
        <li key={i} className="bg-zinc-300 p-5 text-black rounded flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{t.title}</h2>
          <p className="text-2xl font-medium">{t.desc}</p>
          <button className="px-4 py-2 bg-red-400 text-white text-lg" onClick={()=>{
            deleteHandeler(i)
          }}>Delete</button>
        </li>
      )
    })
  }
  return (
    <div className="todo-list bg-black p-5 md:p-10">
      <h1 className="text-white text-3xl font-bold text-center">
        Arbaz Todo List
      </h1>
      <form onSubmit={submit_handler} className="grid grid-cols-2 gap-5 w-full md:w-3/4 m-auto my-10">
        <input
          type="text"
          placeholder="Enter Task"
          value={title}
          className="rounded px-5 py-3 border border-white outline-none text-white bg-transparent col-span-2 md:col-span-1"
          onChange={(e)=>{
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Description"
          value={desc}
          className="rounded px-5 py-3 border border-white outline-none text-white bg-transparent col-span-2 md:col-span-1"
          onChange={(e)=>{
            setdesc(e.target.value);
          }}
        />
        <button className="rounded bg-green-500 text-white px-5 py-3 col-span-2">
          Add Task
        </button>
      </form>
      <hr />
      <ul className="flex gap-5 flex-col m-auto mt-10 w-full md:w-3/4">
        {renderTask}
      </ul>
    </div>
  );
}

export default page;
