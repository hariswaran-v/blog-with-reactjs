import TeamcardPage from "../components/TeamcardPage";
import Teamperson from "../components/data/Teampersons.json";

const TeamPage = () => {
  console.log(Teamperson);

  return (
    <div className=" m-10">
      <h4 className="font-semibold text-2xl mb-3">Meet our team mates!</h4>
      <div className="grid grid-cols-5 gap-5">
        {Teamperson.map((team) => {
          return (
            <TeamcardPage
              key={team.id}
              image={team.image}
              name={team.name}
              role={team.role}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamPage;
