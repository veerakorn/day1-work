import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(1);

  // Call data from https://jsonplaceholder.typicode.com/users
  useEffect( () => {
	console.log("Use effect");
	axios.get('https://jsonplaceholder.typicode.com/users/' + counter)
	.then(function (response) {
		setUser(response.data);
	})

  }, [counter]);
  
  console.log(user);

  return (
    <div>
		  Demo with API.
		  <button onClick={() => setCounter(counter+1)} >Add</button>
		  <h2>{user.name}</h2>
    </div>
  )
}

export default Users