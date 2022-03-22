import stockData from '../../../portfolioData';
import Project from './Project';

const Portfolio = () => (
  <div className="container">
    <span>My recent works</span>
    <h1>Portfolio</h1>
    {stockData.map((project) => (
      <Project
        key={project.id}
        id={project.id}
        title={project.title}
        tags={project.tags}
        images={project.images}
      />
    ))}
  </div>
);

export default Portfolio;
