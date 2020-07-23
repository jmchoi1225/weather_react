import React, {useState, useEffect} from "react";
import { Switch, Route, withRouter } from "react-router";
import CityList from "./CityList";
import Weather from "./Weather/index";

const API_CITIES = "http://localhost:8888/weather-service/available-cities";
const Cities = (props) =>{
  const [cities, setCities] = useState(null);
  const {match} = props;
  useEffect(()=>{
    fetch(API_CITIES)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      });
  })
  return (
    <div>
      <Switch>
          <Route path={`${match.path}/:cityName`} component={Weather} />
          <Route
              exact path={match.path}
              render={() => {
                if(cities != null) return <CityList cities={cities} />
              }}
          />
      </Switch>
    </div>
  );
}

export default withRouter(Cities);