import TeamcardPage from "../components/TeamcardPage";

const TeamPage = () => {
  return (
    <div className=" m-10">
      <h4 className="font-semibold text-2xl mb-3">Meet our team mates!</h4>
      <div className="grid grid-cols-5 gap-5">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((iteration) => (
          
        ))} */}
        <TeamcardPage
          image="https://github.com/hariswaran-v.png"
          name="Hariswaran"
          role="MERN Stack Developer"
        />
        <TeamcardPage
          image="https://i.pinimg.com/736x/e0/3f/3e/e03f3e9e3565e80bf72368f41b068bcb.jpg"
          name="Ajith Kumar"
          role="Actor Racer Creator"
        />
        <TeamcardPage
          image="https://i.pinimg.com/736x/05/76/c8/0576c854b06de5a6459c00209b1150f2.jpg"
          name="Shiva"
          role="Entrepreneur Farmer Social worker"
        />
      </div>
    </div>
  );
};

export default TeamPage;
