import React from "react";
import "./style.css";

const Table = ({ column, data }) => {
  return (
    <div>
      <table className="table">
        <tr className="table-row">
          <th className="table-heading">Name</th>
          <th className="table-heading">Gender</th>
          <th className="table-heading">Hair Color</th>
          <th className="table-heading">Skin Color</th>
          <th className="table-heading">Eye Color</th>
          <th className="table-heading">Birth year</th>
          <th className="table-heading">Height</th>
          <th className="table-heading">Mass</th>
        </tr>
        {data?.map((item) => {
          return (
            <tr>
              <td className="table-data">{item.name}</td>
              <td className="table-data">{item.gender}</td>
              <td className="table-data">{item.hair_color}</td>
              <td className="table-data">{item.skin_color}</td>
              <td className="table-data">{item.eye_color}</td>
              <td className="table-data">{item.birth_year}</td>
              <td className="table-data">{item.height}</td>
              <td className="table-data">{item.mass}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
