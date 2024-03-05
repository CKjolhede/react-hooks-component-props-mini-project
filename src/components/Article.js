import React from "react";
import ArticleList from "./ArticleList"

const Article = ({ title, date, preview, minutes }) => {
	return (
    <article>
      <h3>{title}</h3>
      <small>
        '{date} - Minutes to Read {minutes}'
      </small>
      <p>{preview}</p>
    </article>
  );
}
export default Article;