import React from "react";
import {RouteComponentProps} from "react-router";
import {Link} from "react-router-dom";

export default class ErrorPage extends React.Component<RouteComponentProps<{ message: string }>> {
    render() {
        const {message} = this.props.match.params;
        console.log("EEROROROR", this.props);

        return (<h1>
            {message || <>An Error <Link to={"/error/Someone made a tpyo"}>ocucred</Link></>}
        </h1>);
    }
}