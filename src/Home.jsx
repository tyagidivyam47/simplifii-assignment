import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const tempData = [];

  useEffect(() => {
    const endInd = page * 10;
    const startInd = endInd - 10;

    for (let index = startInd; index <= endInd; index++) {
      if (data.length > 0) {
        tempData.push(data[index]);
      }
    }
    setDatas(tempData);
    // console.log(data);
  }, [page, data]);

  // console.log(page);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5.json`,
      {
        headers: {
          "Content-Type": "application/json",
          // 'Accept': 'application/json'
        },
      }
    );

    const resp = await response.json();
    await setData(resp.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pageChangeHandler = (btn) => {
    if (btn == "next" && page) {
      setPage(page + 1);
    } else if (btn == "prev" && page > 1) {
      setPage(page - 1);
    }
  };

  const deleteEmployeeHandler = async (_id) => {
    const data = await axios.delete(
      `https://mockrestapi.herokuapp.com/api/employee/${_id}`
    );
    console.log("del data", data);
    fetchData();
  };

  return (
    <div>
      <h1>LIST</h1>

      {loading && <h1 className="loading">Loading ...</h1>}

      <Link to="/add">
        <button
          style={{
            padding: "5px",
            borderRadius: "10px",
            margin: "5px",
            backgroundColor: "green",
          }}
        >
          ADD
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {datas.length > 0 && (
            <>
              {datas.map((data) => (
                <tr key={data._id}>
                  <td>{data._id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.country}</td>
                  <td>
                    <button
                      style={{
                        padding: "5px",
                        borderRadius: "10px",
                        margin: "5px",
                        backgroundColor: "red",
                      }}
                      onClick={() => deleteEmployeeHandler(data._id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>

      <div>
        <button style={{padding:"5px", borderRadius:"10px", margin:"5px"}} onClick={() => pageChangeHandler("prev")}>previous</button>
        <button style={{padding:"5px", borderRadius:"10px", margin:"5px"}} onClick={() => pageChangeHandler("next")}>next</button>
      </div>
    </div>
  );
};

export default Home;
