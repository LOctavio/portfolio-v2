import PropTypes from 'prop-types';

const Project = (props) => {
  const { title, tags, images } = props;
  return (
    <div className="project-section">
      <div className="row">
        <div className="main-image-section col-md-7">
          <h3 className="project-title">{title}</h3>
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
          <button type="button" className="see-this-project-btn btn btn-dark">See this project</button>
          <img src={images[0]} className="main-image img-fluid" alt="img" />
        </div>
        <div className="small-images col-md-5">
          <img src={images[1]} className="secondary-image img-fluid" alt="img" />
          <img src={images[2]} className="secondary-image img-fluid" alt="img" />
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
