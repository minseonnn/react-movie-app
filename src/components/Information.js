import styles from "./Imformation.module.css"
import PropTypes  from "prop-types";

function Information({coverImg, title, summary, genres, rate, bImg, runtime}) { 
  return (
    <div className={styles.Info} 
    style={
      {
        backgroundImage:`url(${bImg})`,
      }
    }>
      <img src={coverImg} alt={title}/>
      <div>{title}</div>
      <span>{runtime} 분</span>
      <span>평점 : {rate}</span>
      <ul>{genres && genres.map((g) => (
        <li key={g}>{g} </li>
      ))}</ul>
      <p className={styles.summary}>{summary}</p>
      <></>
    </div>
);

}

Information.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rate: PropTypes.number.isRequired,
};

export default Information;