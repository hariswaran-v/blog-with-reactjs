import { useParams } from "react-router-dom";
import Accordion from "../components/Accordion";
import PropTypes from "prop-types";

const AboutPage = () => {
  const { name } = useParams();

  return (
    <div>
      <div className="m-10 p-10 bg-white rounded">
        <h4 className="font-semibold text-xl mb-3">About</h4>
        <div>
          <h5>Welcome {name ? name : "Guest"}, this is About page!</h5>
        </div>
      </div>
      <div className="m-10 p-10 bg-white rounded ">
        <h4 className="font-semibold text-xl">FAQs</h4>
        <div className="my-5 space-y-4">
          <Accordion
            title="Is your internship free for all?"
            desc="Yes, it is!"
          />
          <Accordion
            title="The Future of AI: How Artificial Intelligence is Shaping Tomorrow"
            desc="Explore how AI is transforming industries, from healthcare to finance, and what innovations to expect in the next decade. A beginner-friendly dive into the evolving world of artificial intelligence."
          />

          <Accordion
            title="Mastering Full Stack Development in 2025: A Complete Guide"
            desc="Learn the essential tools, frameworks, and best practices for becoming a full stack developer this year. From frontend to backend, this guide walks you through the modern tech stack every developer should know."
          />
          <Accordion> </Accordion>
        </div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default AboutPage;
