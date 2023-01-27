import register from "../assets/image/register.png";
import candidate from "../assets/image/candidate.jpg";
import result from "../assets/image/result.jpg";

export const INITIAL_FEATURES = [
  {
    title: "Register",
    icon: register,
    path: "authenticate",
  },
  {
    title: "Candidates",
    icon: candidate,
    path: "candidate",
  },
  {
    title: "Result",
    icon: result,
    path: "result",
  },
];

export const TIMEOUT = 10000;
export const SERVER_URL = process.env.REACT_APP_SERVER_URL ?? "";
