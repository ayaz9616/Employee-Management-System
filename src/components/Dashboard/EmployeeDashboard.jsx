import React from "react";
import Header from "../others/Header";

function EmployeeDashboard({data}) {
  
  

 
  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      {/* Header */}
      <Header data={data} />

      {/* Stats Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8" data={data}>
        <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-emerald-500">
          <h2 className="text-lg font-medium text-gray-600">Tasks Completed</h2>
          <p className="text-2xl font-bold text-emerald-500">{data.taskCounts.completed}</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-green-400">
          <h2 className="text-lg font-medium text-gray-600">Tasks Active</h2>
          <p className="text-2xl font-bold text-green-400">{data.taskCounts.active}</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-amber-400">
          <h2 className="text-lg font-medium text-gray-600">New Tasks</h2>
          <p className="text-2xl font-bold text-amber-400">{data.taskCounts.newTask}</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-red-500">
          <h2 className="text-lg font-medium text-gray-600">Failed Tasks</h2>
          <p className="text-2xl font-bold text-red-500">{data.taskCounts.failed}</p>
        </div>
      </div>

      {/* Tasks List */}
      <div className="bg-white shadow-lg rounded-lg p-6" data={data}>
        <h2 className="text-2xl font-bold text-amber-600 mb-4">Task List</h2>
        <div className="divide-y divide-gray-200">
          {data.tasks.map((task, index) => (
            <div key={index} className="py-4">
              <h3 className="text-lg font-semibold text-gray-700">{task.taskTitle}</h3>
              <p className="text-sm text-gray-500">{task.taskDescription}</p>
              <p className="text-sm text-gray-400">Deadline: {task.taskDate}</p>
              <span
                className={`inline-block mt-2 px-3 py-1 text-sm font-medium rounded-full ${
                  task.importance === "High"
                    ? "bg-red-100 text-red-600"
                    : task.importance === "Medium"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {task.importance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
