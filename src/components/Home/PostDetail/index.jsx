import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../../data/posts";
import styles from "./PostDetail.module.css"

export const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((item) => item.id === parseInt(id));
  if(!post) return <p>記事が見つかりません</p>;

  return (
    <section className={styles.section}>
      <img className={styles.image} src={post.thumbnailUrl}/>
      <div className={styles.body}>
        <div className={styles.head}>
          <p className={styles.date}>{new Date(post.createdAt).toLocaleDateString()}</p>
          <ul className={styles.category}>
            {post.categories.map((category, i) => {
              return (
                <li key={i}>{category}</li>
              )
            })}
          </ul>
        </div>
        <p className={styles.title}>{post.title}</p>
        <p dangerouslySetInnerHTML={{ __html: post.content}} className={styles.text} />
      </div>
    </section>
  )
}
