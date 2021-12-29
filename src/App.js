import axios from "axios";
import React, { useEffect, useState } from "react";
import Adduser from "./components/Adduser";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getPost() {
      const response = await axios.get("https://reqres.in/api/users");
      setUsers(response.data.data);
    }
    getPost();
  }, []);

  async function deleteUser(index) {
    const response2 = await axios.delete(
      `https://reqres.in/api/users/${index}`
    );
    alert("Post deleted!");
    console.log(response2);
  }
  // const deleteUser = (index) => {
  //   const updatedusers = users.filter((user) => {
  //     return user.id !== index;
  //   });
  //   setUsers(updatedusers);
  //   alert("deleted succesfully!");
  // };

  return (
    <div className="flex flex-col items-center bg-gray-100">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold m-4">Hello ReqRes users!</h1>
      <div className="flex flex-wrap justify-center">
        {users.length &&
          users.map((user) => {
            return (
              <div className="m-4 p-2 rounded-md bg-white flex flex-col items-center" key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img  alt="" key={user.avatar} src={user.avatar} />
                <div>
                <button className="p-1 m-1 rounded-md font-semibold text-s text-white bg-blue-500 hover:bg-blue-700" onClick={() => deleteUser(user.id)}>Update</button> 
                <button className="p-1 m-1 rounded-md font-semibold text-s text-white bg-red-500 hover:bg-red-700" onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
                
              </div>
            );
          })}
      </div>
      <Adduser />
    </div>
  );
}

export default App;
