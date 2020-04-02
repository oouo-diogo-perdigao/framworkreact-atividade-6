import React from "react";

export const TableAction = param => {
  const coll = param.coll;
  const list = param.list;
  return (
    <table>
      <thead>
        <tr>
          {coll.map((item, key) => (
            <td key={key}>{item}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map(item => (
          <tr key={item.id}>
            <td> {item.title} </td>
            <td> {item.action} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
