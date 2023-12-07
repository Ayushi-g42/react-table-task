import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table";
import Pagination from "./components/pagination/Pagination";
import SearchBar from "./components/search-bar/Table";

function App() {
  const [data, setData] = useState([]);
  const [currentPageURL, setCurrentPageURL] = useState(
    "https://swapi.dev/api/people"
  );
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [totalItem, setTotalItem] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentPageURL("https://swapi.dev/api/people")
  }, []);

  useEffect(() => {
    getUserData();
    /* eslint-disable */
  }, [currentPageURL]);
 

  const getUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(currentPageURL, {
        method: "GET",
      });
      const result = await response.json();
      if (result) {
        console.log("result", result?.results);
        setData(result?.results);
        setTotalItem(result?.count);
        setNextPage(result?.next);
        setPreviousPage(result?.previous);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  
  const searchData = async (search) => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${search}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      if (result) {
        setData(result?.results);
        setTotalItem(result?.count);
        setNextPage(result?.next);
        setPreviousPage(result?.previous);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="App">
        Loading.... <i class="fa-solid fa-spinner"></i>
      </div>
    );
  }
  return (
    <div className="App">
      <h2>Details</h2>
      <SearchBar
        handleChange={(text) => {
          searchData(text);
        }}
      />

      {data.length > 0 ? (
        <Table data={data} />
      ) : (
        <div>
          <h6>No Data</h6>
          <button
            className="clear-btn"
            onClick={() => {
              searchData("");
            }}
          >
            Clear search
          </button>
        </div>
      )}
      {data.length > 0 && (
        <Pagination
          totalItem={totalItem}
          previousPage={previousPage}
          nextPage={nextPage}
          onClickPrevious={() => {
            setCurrentPageURL(previousPage);
          }}
          onClickNext={() => {
            setCurrentPageURL(nextPage);
          }}
        />
      )}
    </div>
  );
}

export default App;
