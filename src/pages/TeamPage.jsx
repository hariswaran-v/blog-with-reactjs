import TeamcardPage from "../components/Teamcard";

const TeamPage = () => {
  return (
    <div className=" m-10">
      <h4 className="font-semibold text-2xl mb-3">Meet our team mates!</h4>
      <div className="grid grid-cols-5 gap-5">
        {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((iteration) => (
          
        ))} */}
        <TeamcardPage />
      </div>
    </div>
  );
};

export default TeamPage;
