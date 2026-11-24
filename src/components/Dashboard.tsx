import {useState} from "react";

type DashboardProps = {
  onLogout: () => void;
};
type Task = {
  id: number;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
};

function Dashboard({ onLogout }: DashboardProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [priority, setPriority] = useState<Task["priority"]>("Medium");
const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(searchTerm.toLowerCase())
);

const addTask = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (title.trim() === "") {
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    title,
    description,
    priority,
    completed: false,
  };

  setTasks((previousTasks) => [...previousTasks, newTask]);

  setTitle("");
  setDescription("");
  setPriority("Medium");
};
const updateTask = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setTasks((previousTasks) =>
    previousTasks.map((task) =>
      task.id === editingTaskId
        ? { ...task, title, description, priority }
        : task
    )
  );

  setEditingTaskId(null);
  setTitle("");
  setDescription("");
  setPriority("Medium");
};
  return (
    <div className="min-h-screen bg-rose-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-rose-800">
              My Todo Manager
            </h1>
            <p className="text-gray-600 mt-2">
              Organize your tasks and stay productive.
            </p>
          </div>

          <button
            onClick={onLogout}
            className="bg-rose-700 text-white px-5 py-2 rounded-lg hover:bg-rose-800"
          >
            Logout
          </button>
        </header>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-gray-500">Total Tasks</p>
    <h2 className="text-3xl font-bold text-rose-700">
      {filteredTasks.length}
    </h2>
  </div>

  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-gray-500">Completed</p>
    <h2 className="text-3xl font-bold text-green-600">
      {filteredTasks.filter((task) => task.completed).length}
    </h2>
  </div>

  <div className="bg-white p-5 rounded-xl shadow">
    <p className="text-gray-500">Pending</p>
    <h2 className="text-3xl font-bold text-orange-500">
      {filteredTasks.filter((task) => !task.completed).length}
    </h2>
  </div>

</div>
        {/* Dashboard content */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Your Tasks
          </h2>

          <input
  type="text"
  placeholder="Search tasks by title..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-rose-400"
/>
{filteredTasks.length === 0 ? (
  <p className="text-gray-500 mt-6">
    {searchTerm
      ? "No tasks found matching your search."
      : "No task added yet. Start by creating your first task!"}
  </p>
) : (
  <div className="mt-6 space-y-4">
    {filteredTasks.map((task) => (
      <div
        key={task.id}
        className="border border-gray-200 rounded-xl p-4"
      >
        <div className="flex items-center gap-3">
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => {
      setTasks((previousTasks) =>
        previousTasks.map((item) =>
          item.id === task.id
            ? { ...item, completed: !item.completed }
            : item
        )
      );
    }}
    className="w-5 h-5 accent-rose-700"
  />

  <h3
    className={`font-bold ${
      task.completed
        ? "line-through text-gray-400"
        : "text-gray-800"
    }`}
  >
    {task.title}
  </h3>
</div>

        <p className="text-gray-600 mt-1">
          {task.description}
        </p>

<span
  className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold ${
    task.priority === "High"
      ? "bg-red-100 text-red-700"
      : task.priority === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700"
  }`}
>
  {task.priority} Priority
</span>
        <button
  onClick={() => {
    setTasks((previousTasks) =>
      previousTasks.filter((item) => item.id !== task.id)
    );
  }}
  className="mt-3 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200"
>
  Delete
</button>

<button
  onClick={() => {
    setEditingTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
  }}
  className="mt-3 mr-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200"
>
  Edit
</button>
      </div>
    ))}
  </div>
)}
        <form className="space-y-4" onSubmit={editingTaskId !== null ? updateTask : addTask}>
  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Task Title
    </label>
    <input
      type="text"
      placeholder="Enter task title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-400"
    />
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Description
    </label>
    <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
      placeholder="Describe your task"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-rose-400"
      rows={3}
    />
  </div>

  <div>
    <label className="block text-gray-700 font-medium mb-2">
      Priority
    </label>
    <select
      value={priority}
      onChange={(e) => setPriority(e.target.value as Task["priority"])}
      className="w-full border border-gray-300 rounded-lg p-3"
    >
      <option value="">Select priority</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  </div>

  <button
    type="submit"
    className="bg-rose-700 text-white px-6 py-3 rounded-lg hover:bg-rose-800"
  >
    {editingTaskId !== null ? "Save Changes" : "Add Task"}
  </button>
  {editingTaskId !== null && (
  <button
    type="button"
    onClick={() => {
      setEditingTaskId(null);
      setTitle("");
      setDescription("");
      setPriority("Medium");
    }}
    className="ml-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"
  >
    Cancel
  </button>
)}
</form>
        </section>

      </div>
    </div>
  );
}

export default Dashboard;