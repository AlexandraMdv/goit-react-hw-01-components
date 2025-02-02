import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

const Statistics = ({title, data}) => {
    console.log(data);
    return (
        <section className={styles.statistics}>
            {title && <h2 className="title">{title}</h2> }

            <ul className={styles.statList}>
                {data.map(data => (
                    <li key={data.id} className={styles.item} style={ {backgroundColor: randomColor()}}>
                        <span className={styles.label}>{data.label}</span>
                        <span className={styles.percentage}>{data.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
};

export default Statistics;