import "./About.css";
import Card from "./Components/Aboutcard.jsx";

export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-center font-display text-3xl text-text-dark">
        About
      </h1>
      <div className="flex justify-center">
        <img src="/demonstration.jpeg" alt="" width="500px" height="auto" />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-end">
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
                  English has always been a difficult subject and because of limited literature
                  resources online, we created a user-friendly platform that gathers insightful
                  literature questions to help students grasp key concepts in various English novels."
          />
        </div>
      </div>
    </div>
  );
}
