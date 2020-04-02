import React from "react";

export const SimpleArticle = article => {
  return (
    <article>
      <h1>{article.title}</h1>
      <figure>
        <img src={article.imgSrc}></img>
        <figcaption>{article.legend}</figcaption>
      </figure>
      {article.text}
    </article>
  );
};
