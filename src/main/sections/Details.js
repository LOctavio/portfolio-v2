import PropTypes from 'prop-types';
import { useState } from 'react';
import stockData from '../../portfolioData';

const Details = (props) => {
  const {
    handleClose, show, id,
  } = props;
  const showHideclassNameName = show ? 'modal display-block' : 'modal display-none';
  const [page, setPage] = useState(id);
  const {
    title, tags, description, images, live, source,
  } = stockData[page - 1];
  const mainImage = images[0];
  const amountOfProjects = stockData.length;

  const nextPage = () => {
    if (page < amountOfProjects) setPage(page + 1);
    else setPage(1);
  };

  const previusPage = () => {
    if (page > 1) setPage(page - 1);
    else setPage(amountOfProjects);
  };

  return (
    <div className={`${showHideclassNameName}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h2 className="modal-title" id="staticBackdropLabel">{title}</h2>
              <div className="modal-tags">
                {tags.map((tag) => (
                  <span className="modal-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose} />
          </div>
          <div className="modal-body">
            <div className="row">
              <img src={mainImage} className="img-fluid col-md-8" alt="img" />
              <div className="col-md-4 d-flex flex-column justify-content-between">
                <span>{description}</span>
                <div className="d-flex justify-content-between">
                  <a href={live}>See live</a>
                  <a href={source}>See source</a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer justify-content-between">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={previusPage}>Previus page</button>
            <span>{`${page} of ${amountOfProjects}`}</span>
            <button type="button" className="btn btn-secondary" onClick={nextPage}>Next page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Details;
