import { Route, Switch } from "react-router-dom";
import Authenticate from "./auth";
import Candidate from "./candidate";
import Confirm from "./Confirm";
import FingerPrint from "./fingerprint/fingerprint";
import Landing from "./Landing";
import NotFound from "./NotFound";
import Result from "./result";
import Success from "./votesuccess/Success";

const Navigation = () => {
  return (
    <div className="w-[98%] h-[80%] overflow-y-auto">
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route exact path={"/authenticate"} component={Authenticate} />
        <Route exact path={"/candidate"} component={Candidate} />
        <Route exact path={"/result"} component={Result} />
        <Route exact path={"/confirm"} component={Confirm} />
        <Route exact path={"/FingerPrint"} component={FingerPrint} />
        <Route exact path={"/Success"} component={Success} />
        <Route exact path={"*"} component={NotFound} />
      </Switch>
    </div>
  );
};

export default Navigation;
