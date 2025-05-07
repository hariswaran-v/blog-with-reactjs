import Accordion from "../components/Accordion";
import PropTypes from "prop-types";

const AboutPage = () => {
  return (
    <div className="pt-16">
      <div className="m-10  bg-white rounded">
        <img
          src="https://i.pinimg.com/736x/84/de/68/84de6842cc4a4813c91a41765e68b75c.jpg"
          alt="contact"
          className="w-full h-96 object-cover rounded"
        />
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
