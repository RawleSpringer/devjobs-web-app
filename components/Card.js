import styles from '../styles/Card.module.css';

const Card = ({ job }) => {
  return (
    <article className={styles.container}>
      <p
        style={{
          backgroundColor: job.logoBackground,
          height: '50px',
          width: '50px',
        }}
      >
        <img src={job.logo} alt="" />
      </p>
      <p>
        {job.postedAt} . {job.contract}
      </p>
      <p>{job.position}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </article>
  );
};

export default Card;
