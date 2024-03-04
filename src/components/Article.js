import React from "react";
import ArticleList from "./ArticleList"

const Article = ({ title, date, preview, minutes }) => {
	return (
    <li className="article">
      <h3>{title}</h3>
      <p>{date}</p>
			<p>{preview}</p>
			<p>{minutes}</p>
		</li>)
}
export default Article;