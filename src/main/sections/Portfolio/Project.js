import PropTypes from 'prop-types';
import { useState } from 'react';
import Details from '../Details';

const Project = (props) => {
  const {
    title, tags, images, id,
  } = props;
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

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
          <Details show={show} handleClose={hideModal} title={title} tags={tags} id={id} />
          <button type="button" className="see-this-project-btn btn btn-dark" onClick={showModal}>See this project</button>
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
  id: PropTypes.number.isRequired,
};

export default Project;
