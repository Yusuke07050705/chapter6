import React from "react";
import { posts } from "./data/posts";
import "./taskOne.css";

export default function TaskOne({ data }) {
  return (
    <div>
      <header className="header">
        <p>Blog</p>
        <p>contact</p>
      </header>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <p>{post.createdAt}</p>
            <div className="category">
              {post.categories.map((cat, index) => (
                <span key={index}>{cat}</span>
              ))}
            </div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
);
}