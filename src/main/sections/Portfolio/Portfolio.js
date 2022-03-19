import stockData from '../../../data';
import Project from './Project';

const Portfolio = () => (
  <div className="container">
    <span>My recent works</span>
    <h1>Portfolio</h1>
    {stockData.map((project) => (
      <Project
        key={project.title}
        title={project.title}
        tags={project.tags}
        images={project.images}
      />
    ))}
  </div>
);

export default Portfolio;
