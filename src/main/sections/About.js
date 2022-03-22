import skillsData from '../../skillsData';

const About = () => (
  <div className="container">
    <div className="row">
      <div className="about-info col-md-5">
        <h1>About me</h1>
        <div>
          <span>I am a full stack software developer. </span>
          <span>I studied at Microverse, </span>
          <span>a remote software development program that uses pair programming </span>
          <span>and project building to teach development, </span>
          <span>where I build real-world projects with people from all around the world.</span>
          <span>I am passionate about software development because I </span>
          <span>believe that we can provide solutions to </span>
          <span>almost every single problem in the world.</span>
        </div>
        <a href="https://drive.google.com/file/d/1LQ1GrEvDh-ZFzXLK1mvZ0AAurq83Lf9a/view?usp=sharing">
          <p>Get my resume</p>
        </a>
      </div>
      <div className="col-md-7">
        <div className="row">
          {skillsData.map((skills) => (
            <div key={skills.title} className="col-sm-6 mb-3">
              <div className="card text-white bg-dark">
                <h5>{skills.title}</h5>
                <ul>
                  {skills.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;
