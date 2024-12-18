const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "arjun@example.com",
    password: "1234",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Revamp homepage",
        taskDescription: "Redesign the homepage layout",
        taskDate: "2024-12-10",
        category: "Design",
        importance: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client presentation",
        taskDescription: "Prepare slides for a client meeting",
        taskDate: "2024-12-05",
        category: "Presentation",
        importance: "Medium",
      },
    ],
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "sneha@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize database queries",
        taskDescription: "Improve performance of database queries",
        taskDate: "2024-12-11",
        category: "Database",
        importance: "High",
      },
    ],
  },
  {
    id: 3,
    firstName: "Ravi",
    email: "ravi@example.com",
    password: "1234",
    taskCounts: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare client proposal",
        taskDescription: "Create a detailed proposal for the client",
        taskDate: "2024-12-13",
        category: "Proposal",
        importance: "High",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review codebase for new features",
        taskDate: "2024-12-12",
        category: "Development",
        importance: "Medium",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug fixing",
        taskDescription: "Fix bugs reported by QA",
        taskDate: "2024-12-05",
        category: "Development",
        importance: "Low",
      },
    ],
  },
  {
    id: 4,
    firstName: "Priya",
    email: "priya@example.com",
    password: "1234",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Document API",
        taskDescription: "Write API documentation",
        taskDate: "2024-12-15",
        category: "Documentation",
        importance: "Medium",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "CI/CD setup",
        taskDescription: "Set up continuous integration and deployment",
        taskDate: "2024-12-10",
        category: "DevOps",
        importance: "High",
      },
    ],
  },
  {
    id: 5,
    firstName: "Karan",
    email: "karan@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI redesign",
        taskDescription: "Redesign the app UI for better UX",
        taskDate: "2024-12-14",
        category: "Design",
        importance: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest build to production",
        taskDate: "2024-12-05",
        category: "DevOps",
        importance: "Medium",
      },
    ],
  },
  {
    id: 6,
    firstName: "Nina",
    email: "nina@example.com",
    password: "1234",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test new features",
        taskDescription: "Test the newly implemented features in the app",
        taskDate: "2024-12-18",
        category: "Testing",
        importance: "High",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create test cases",
        taskDescription: "Write test cases for the new features",
        taskDate: "2024-12-10",
        category: "Testing",
        importance: "Medium",
      },
    ],
  },
  {
    id: 7,
    firstName: "Vikram",
    email: "vikram@example.com",
    password: "1234",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Analyze customer feedback",
        taskDescription: "Review and analyze customer feedback to improve service",
        taskDate: "2024-12-20",
        category: "Customer Support",
        importance: "Medium",
      },
    ],
  },
];



const admin = [{
  id: 7,
  firstName: "Jon",
  email: "Jon@e.com",
  password: "123",
  taskCounts: {
    active: 1,
    newTask: 1,
    completed: 0,
    failed: 0,
  },
  tasks: [
    {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle: "Analyze customer feedback",
      taskDescription: "Review and analyze customer feedback to improve service",
      taskDate: "2024-12-20",
      category: "Customer Support",
      importance: "Medium",
    },
  ],
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}