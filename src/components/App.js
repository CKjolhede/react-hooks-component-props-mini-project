import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Article from "./Article"
import ArtilceList from "./ArticleList"
import Header from "./Header"
console.log(blogData);

function App() {
  return (
    <div className="App">
			<Header name = { blogData.name }/>
			<About about = { blogData.about } img = { blogData.image }/>
		</div>
  );
}

export default App;
