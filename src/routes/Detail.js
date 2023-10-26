import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Infomation from "../components/Information"
import styles from "./Detail.module.css"

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      console.log(json);
      setMovie(json.data.movie);
      setLoading(false);
  };
  useEffect(() => {
    getMovie();
  },[]);
  return (
    loading ? (
    <div className={styles.loading}>Loading...</div>
    ) : (
      <Infomation
        coverImg={movie.large_cover_image} 
        title={movie.title_long}
        summary={movie.description_full} 
        genres={movie.genres} 
        rate={movie.rating}
        bImg={movie.background_image_original}
        runtime={movie.runtime}

      />
    )
  );
}

export default Detail;