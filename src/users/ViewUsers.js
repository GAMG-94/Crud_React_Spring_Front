import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewUsers() {
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
  });

  const { id } = useParams();
  console.log("ID del usuario:", id);

  const userId = parseInt(id, 10); // Convierte a número entero con base 10

useEffect(() => {
  if (!isNaN(userId)) {
    loadUser();
  }
}, [userId]);

const loadUser = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/user/${userId}`);
    setUser(response.data);
  } catch (error) {
    console.log("Error:", error.response.data);
  }
};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
                Details for user id:
                {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>
                    Name:
                    {user.name}
                  </b>
                </li>
                <li className="list-group-item">
                  <b>
                    UserName:
                    {user.userName}
                  </b>
                </li>
                <li className="list-group-item">
                  <b>
                    Email:
                    {user.email}
                  </b>
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
