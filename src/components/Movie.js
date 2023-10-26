import PropTypes  from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({id,coverImg,title,summary,genres}) {
  return (
    <div className={styles.movie_list}>
      <Link to={`/movie/${id}`}>
        <img className={styles.hover} src={coverImg} alt={title} />
      </Link>
      <div className={styles.title_hover}>
        <Link to={`/movie/${id}`} 
          style={
            { 
              textDecoration: "none" ,
              color: "black",
              fontSize : "25px",
            }
          }>
          {title}
        </Link>
      </div>
      <ul>
        {genres && genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      {summary.length < 200 ? (<p>{summary}</p>) : (<p>{summary.split('').slice(0, 600).join('')}...</p>)}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;