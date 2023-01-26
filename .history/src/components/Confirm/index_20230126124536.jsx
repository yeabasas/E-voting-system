import { useSelector } from "react-redux";

const Confirm = () => {
    const { features } = useSelector((state) => state.contestant);
  return (
    <div className="flex justify-center rounded-md my-9">
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
      </div>
        ))}
    );
    
}
 
export default Confirm;