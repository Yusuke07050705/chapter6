import React from "react";
import { posts } from "../../data/posts";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <ul className={styles.ul}>
        {posts.map((post) => (
          <li key={post.id} className={styles.li}>
            <p className={styles.date}>{post.createdAt}</p>
            <div className={styles.category}>
              {post.categories.map((cat, index) => (
                <span key={index}>{cat}</span>
              ))}
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
          </li>
        ))}
      </ul>
    </div>
  );
};