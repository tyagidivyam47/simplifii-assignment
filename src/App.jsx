import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);
  console.log(data);

  const tempData = [];

  useEffect(() => {
    const endInd = page * 10;
    const startInd = endInd - 10;
    // const datas = [];
    // const currInd = 0;
    for (let index = startInd; index <= endInd; index++) {
      if (data.length > 0) {
        tempData.push(data[index]);
      }
    }
    setDatas(tempData);
    console.log(data);
  }, [page, data]);

  // console.log(page);

  const fetchData = async () => {
    const response = await fetch(
      `http://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=5.json`,
      {
        headers: {
          "Content-Type": "application/json",
          // 'Accept': 'application/json'
        },
      }
    );

    const resp = await response.json();
    await setData(resp.data);
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

  // const content = datas.map((data) => (
  //   <tr>
  //     <td>{data._id}</td>
  //     <td>{data.name}</td>
  //     <td>{data.email}</td>
  //     <td>{data.phone}</td>
  //     <td>{data.country}</td>
  //   </tr>
  // ));

  return (
    <div className="App">
      <h1>List of employees</h1>

      <button>ADD</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
          </tr>
        </thead>

        <tbody>
          {datas.length > 0 && (
            <>
              {datas.map((data) => (
                <tr>
                  <td>{data._id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.country}</td>
                  <td>
                    <button>DELETE</button>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>

      <div>
        <button onClick={() => pageChangeHandler("prev")}>previous</button>
        <button onClick={() => pageChangeHandler("next")}>next</button>
      </div>
    </div>
  );
}

export default App;
