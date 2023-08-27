import './About.css'
import Card from './Components/Aboutcard.jsx'

export default function About() {
  const container = {
    display: 'flex'
  };
  return (
    <>
      <h1>About</h1>
      <img
          src="public/demonstration.jpeg"
          alt=""
          width="500px"
          height="auto">
      </img>
      <div style={container}>
        <div>
          <Card
            heading="Our Project"
            desc="Discover PagePal: Your tool to understanding English literature.
                  Our platform generates insightful questions that guide your understanding
                  of each chapter, refining your comprehension of classic works.
                  With an expansive coverage of books, PagePal offers an interactive learning
                  experience for students everywhere."
          />
        </div>
        <div>
          <Card
            heading="Our Mission"
            desc="We designed PagePal with a goal to fortify student reading comprehension.
                  English is a difficult subject and because of limited literature resources online,
                  we created a user-friendly platform that gathers insightful literature questions to help students grasp
                  key concepts in various English novels."
          />
        </div>
      </div>
    </>
  );
}