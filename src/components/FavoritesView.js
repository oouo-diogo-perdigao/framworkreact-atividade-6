import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { favoritesRemove } from "../actions/favoritesActions";

export const FavoritesView = () => {
  const selector = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  console.log(selector);

  return (
    <table>
      <thead>
        <tr>
          <td>Filme</td>
          <td>Ação</td>
        </tr>
      </thead>
      <tbody>
        {selector.favorites.map(obj => {
          console.log(obj);
          return (
            <tr key={obj.id}>
              <td>
                <Link to={"/film/" + obj.id}>{obj.title}</Link>
              </td>
              <td>
                <button
                  onClick={() =>
                    dispatch(favoritesRemove({ title: obj.title, id: obj.id }))
                  }
                >
                  Remove Favorites
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
