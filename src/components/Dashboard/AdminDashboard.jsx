import React, { useState } from "react";
import Header from "../others/Header";

function AdminDashboard({data}) {
  const [tasks, setTasks] = useState([]);
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    deadline: "",
    importance: "Low",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskForm({ ...taskForm, [name]: value });
  };

  const handleCreateTask = () => {
    if (taskForm.title && taskForm.description && taskForm.deadline) {
      setTasks([...tasks, taskForm]);
      setTaskForm({ title: "", description: "", deadline: "", importance: "Low" });
    } else {
      alert("Please fill all fields!");
    }
  };

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="min-h-screen bg-teal-50 p-6">
      {/* Header */}
      <Header data={data} />

      Task Creation Form
      <div className="mb-8 p-6 bg-white shadow-lg rounded-lg border border-teal-300">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Create a Task</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Task Title</label>
            <input
              type="text"
              name="title"
              value={taskForm.title}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Description</label>
            <textarea
              name="description"
              value={taskForm.description}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter task description"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Deadline</label>
            <input
              type="date"
              name="deadline"
              value={taskForm.deadline}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Importance</label>
            <select
              name="importance"
              value={taskForm.importance}
              onChange={handleInputChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleCreateTask}
            className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
          >
            Create Task
          </button>
        </form>
      </div>

      {/* Task List */}
      <div className="bg-white shadow-lg rounded-lg p-6 border border-blue-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Task List</h2>
        {tasks.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {tasks.map((task, index) => (
              <div key={index} className="py-4">
                <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                <p className="text-sm text-gray-500">{task.description}</p>
                <p className="text-sm text-gray-400">Deadline: {task.deadline}</p>
                <span
                  className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                    task.importance === "High"
                      ? "bg-red-100 text-red-600"
                      : task.importance === "Medium"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {task.importance}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No tasks created yet.</p>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
