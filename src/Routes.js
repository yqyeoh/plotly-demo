import React from "react";
import { Route, Switch } from "react-router-dom";
import ReligiousMinorities from "./ReligiousMinorities";
import FullChart from "./FullChart";
import DiversityAndInclusion from "./DiversityAndInclusion";
import SocietyAndPrivilege from "./SocietyAndPrivilege";
import ClimateInjustice from "./ClimateInjustice";
import EquitableTech from "./EquitableTech";
import SexualOrientationIdentity from "./SexualOrientationIdentity";
import RacialMinorities from "./RacialMinorities";
import EconomicJustice from "./EconomicJustice";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/full" component={FullChart} />
        <Route
          path="/diversityandinclusion"
          component={DiversityAndInclusion}
        />
        <Route path="/religiousminorities" component={ReligiousMinorities} />
        <Route path="/societyandprivilege" component={SocietyAndPrivilege} />
        <Route path="/climateinjustice" component={ClimateInjustice} />
        <Route path="/equitabletech" component={EquitableTech} />
        <Route
          path="/sexualorientationidentity"
          component={SexualOrientationIdentity}
        />
        <Route path="/racialminorities" component={RacialMinorities} />
        <Route path="/economicjustice" component={EconomicJustice} />
        <Route path="/" component={FullChart} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
