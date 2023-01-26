import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Landing = () => {
  const { features } = useSelector((state) => state.setting);
  return (
  <>
    <div className="w-full h-full flex flex-col items-center py-10">
      <div className="text-xl font-semibold py-10 italic">
        This Is Official Ethiopian National Election Website
      </div>
      <div className="w-full flex items-center justify-evenly">
        {features.map((feature, idx) => (
          <Link
            to={feature.path}
            key={idx}
            className="w-fit h-fit flex flex-col items-center gap-2 rounded-md shadow-2xl pb-2 cursor-pointer"
          >
            <img
              className="w-48 h-48 object-cover"
              src={feature.icon}
              alt="Register"
            />
            <div className="text-lg font-semibold">{feature.title}</div>
          </Link>
        ))}
      </div>
    </div>
    <div className="flex mb-0">
      The decision to register to vote is yours. If you decide to register to vote, 
      the office at which you are submitting this application will remain confidential<br/>
      and will be used only for voter registration purposes. If you decline to register 
      to vote, your decision will remain confidential and will be used only for voter 
      registration purposes.
    </div>
    
  </>
  );
};

export default Landing;
