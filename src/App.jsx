import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage, getLocalStorage } from './utils/localStorage'

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    // Initialize local storage data on app start if not already set
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage();
    }

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      if (parsedUser.role === 'employee' || parsedUser.role === 'admin') {
        setLoggedInUserData(parsedUser.data);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    if (admin.some((a) => a.email === email && a.password === password)) {
      const adminData = admin.find((a) => a.email === email);
      setUser('admin');
      setLoggedInUserData(adminData);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin', data: adminData })
      );
    } else if (employees.some((e) => e.email === email && e.password === password)) {
      const employeeData = employees.find((e) => e.email === email);
      setUser('employee');
      setLoggedInUserData(employeeData);
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'employee', data: employeeData })
      );
    } else {
      alert('Invalid Credentials');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && (
        <AdminDashboard
          changeUser={setUser}
          handleLogout={handleLogout}
          data={loggedInUserData}
        />
      )}
      {user === 'employee' && (
        <EmployeeDashboard
          changeUser={setUser}
          handleLogout={handleLogout}
          data={loggedInUserData}
        />
      )}
    </>
  );
};

export default App;
