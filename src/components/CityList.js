import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const CityList = (props) => {
    const { cities, match } = props;
    const { url } = match;
    return (
        <div>
            <h1>Cities</h1>
            <p>City list</p>
            <ul>
            {cities.map((item) => {
                return (
                <li key={item}>
                    <Link to={`${url}/${item}`}>{item}</Link>
                </li>
                );
            })}
            </ul>
        </div>
        
    );
};
export default withRouter(CityList);