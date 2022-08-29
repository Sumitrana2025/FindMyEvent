import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:3003/users');
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Home Page</h1>
        <table class='table border shadow'>
          <thead class='thead-dark'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col' align='center'>
                Event Name
              </th>
              <th scope='col' align='center'>
                Description
              </th>
              <th scope='col' align='center'>
                Email
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class='btn-view' to={`/users/${user.id}`}>
                    <i class='fa-solid fa-eye'></i>
                  </Link>
                  <Link class='btn-edit' to={`/users/edit/${user.id}`}>
                    <i class='fa-solid fa-pen-to-square'></i>
                  </Link>
                  <Link class='btn-delete' onClick={() => deleteUser(user.id)}>
                    <i class='fa-solid fa-trash'></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
