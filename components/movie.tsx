"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
interface MovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/movie/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={handleClick} />
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
}
