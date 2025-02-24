import PropTypes from 'prop-types';

const InfoItem = ({ label, value, link }) => (
  <p style={styles.text}>
    {label && `${label}: `}
    {link ? (
      <a href={link} style={styles.link}>
        {value}
      </a>
    ) : (
      value
    )}
  </p>
);

// ✅ propTypes should be defined outside the component
InfoItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
};

const styles = {
  text: {
    color: 'white',
    fontSize: '15px',
    textDecoration: 'none',
  },
  link: {
    color: 'pink',
    fontSize: '15px',
    textDecoration: 'none',
  },
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>My Name:</h2>
      <InfoItem value="Jennifer Blocker" />

      <h2>Contact Me</h2>
      <InfoItem
        label="Launchpad Email"
        value="jbloc0008@launchpadphilly.org"
        link="mailto:jbloc0008@launchpadphilly.org"
      />
      <InfoItem
        label="My Github"
        value="Jenni4B"
        link="https://github.com/Jenni4B"
      />
    </div>
  );
};

export default Contact;
