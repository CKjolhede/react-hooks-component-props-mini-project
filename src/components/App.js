import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList"
import Header from "./Header"
import logo from "../assets/logo.js"


function App() {
  return (
    <div className="App">
			<Header name = { blogData.name }/>
			<About about={blogData.about} img={blogData.image} />
			<ArticleList posts={blogData.posts} />
		</div>
  );
}

export default App;
