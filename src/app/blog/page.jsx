"use client"

import React, {useEffect} from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";






async function getData() {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export default function Home() {
  
  const fetchData = async () => {
    const posts = await getData();
    console.log(posts);
  };

  fetchData();

  const data = getData();

  return (
    <div className={styles.mainContainer}>
    {data.map((item) => (
      <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
        <div className={styles.imageContainer}>
          <Image
            src={item.img}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
        </div>
      </Link>
    ))}
  </div>

      
  );
}