import skillsData from '../../skillsData';

const About = () => (
  <div className="container">
    <div className="row">
      <div className="about-info col-md-6">
        <h1>About me</h1>
        <span>I am a full stack software developer.</span>
        <span>I studied at Microverse, </span>
        <span>a remote software development program that uses pair programming </span>
        <span>and project building to teach development, </span>
        <span>where I build real-world projects with people from all around the world.</span>
        <span>I am passionate about software development because I </span>
        <span>believe that we can provide solutions to </span>
        <span>almost every single problem in the world.</span>
        <a href="https://drive.google.com/file/d/1LQ1GrEvDh-ZFzXLK1mvZ0AAurq83Lf9a/view?usp=sharing">
          <span>Get my resume</span>
        </a>
      </div>
      <div className="row col-md-6">
        {skillsData.map((skills) => (
          <div key={skills.title} className="card text-white bg-dark mb-3 col-sm-6">
            <h5>{skills.title}</h5>
            <ul>
              {skills.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default About;
