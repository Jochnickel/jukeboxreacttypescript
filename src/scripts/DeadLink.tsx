import React from "react";
import {Link} from "react-router-dom";


export default class DeadLink extends React.Component<{ onClick: any; to? : string; navLink?: boolean; [any:string]:any}>{
    render() {
        const cn = this.props.navLink? {className: this.props.className+" nav-link"} : {};
        const props = {to:"",...cn,...this.props};
        const handleClick = (e: any) => {
            e.preventDefault();
            this.props.onClick(e);
        };
        return (
            <Link {...props} onClick={handleClick}/>
        );
    }
}