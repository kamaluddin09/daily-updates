// import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";

type TaskFormInputs = {
  Task: string;
  Description: string;
  status: "Pending" | "Completed";
};
const TasksForm = () => {
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm<TaskFormInputs>();

  function onSubmit(data: any) {
    console.log("data is submitted", data);
    reset();
    setShowForm(false);
  }

  return (
    <div className="flex flex-col  items-center justify-center mt-10  ">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 mb-7"
        onClick={() => setShowForm((prev) => !prev)}
      >
        + Add Task
      </button>
      {showForm && (
        <div className="mt-4 p-4  rounded bg-white max-w-md shadow">
          <h2 className="text-lg font-bold mb-2">Add New Task</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="  p-4 bg-white  shadow"
          >
            <label className="text-gray-700"> enter task</label>
            <input
              type="text"
              {...register("Task", {
                required: true,
                minLength: { value: 5, message: "Minimum 5 characters" },
                maxLength: { value: 15, message: "Maximum 15 characters" },
              })}
              className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter task"
            />
            {errors.Task && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.Task.message}
              </p>
            )}

            <label className="text-gray-700"> Description</label>
            <textarea
              // type="textarea"
              {...register("Description", {
                required: true,
                minLength: { value: 5, message: "Minimum 10 characters" },
                maxLength: { value: 15, message: "Maximum 25 characters" },
              })}
              required
              placeholder="Enter Description"
              rows={1}
              className="focus:rows-3 mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.Description && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.Description.message}
              </p>
            )}
            <div>
              <label className="text-gray-700">status</label>
              <select
                {...register("status", { required: true })}
                className="w-full border p-2 rounded"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 mt-5 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TasksForm;
