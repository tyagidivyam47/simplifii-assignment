import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    about: "",
    age: "",
    dob: "",
    address: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post("https://mockrestapi.herokuapp.com/api/employee", user);
    navigate("/");
  };

  return (
    <div>
      <h2>Add a User</h2> <hr />
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          placeholder="Enter your name"
          value={user.name}
          name="name"
          onChange={(e) => onInputChange(e)}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Enter your Phone Number"
          value={user.phone}
          name="phone"
          onChange={(e) => onInputChange(e)}
        />{" "}
        <br />
        <input
          type="text"
          name="email"
          placeholder="Enter your E-Mail"
          value={user.email}
          onChange={(e) => onInputChange(e)}
        />{" "}
        <br />
        <input
          type="text"
          name="country"
          placeholder="Enter your Country"
          value={user.country}
          onChange={(e) => onInputChange(e)}
        />{" "}
        <br />
        <input
          type="text"
          name="about"
          placeholder="About"
          value={user.about}
          onChange={(e) => onInputChange(e)}
        />{" "}
        <br />
        <input
          type="text"
          name="age"
          placeholder="Enter your Age"
          value={user.age}
          onChange={(e) => onInputChange(e)}
        />{" "}
        <br />
        <input
          type="date"
          name="dob"
        //   placeholder="Enter your Country"
          value={user.dob}
          onChange={(e) => onInputChange(e)}
        />{" "}
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Add;
