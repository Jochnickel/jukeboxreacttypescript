import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import Api from "../Api";
import ILobby from "../ILobby";
import IPlaylist from "./IPlaylist";
import IPlayerControls from "../Player/IPlayerControls";

export default class SearchField extends React.Component<{ lobby: ILobby; playlist: IPlaylist;} & IPlayerControls> {
    render() {
        const handleSubmit = (e: any) => {
            e.preventDefault();
            const form = e.target;
            form.url.disabled = true;
            this.props.addSong(form.url.value).then(form.url.disabled = false);
        };
        return (
            <Form onSubmit={handleSubmit} style={{marginTop:"1em"}}>
                <Form.Group>
                    <InputGroup>
                        <Form.Control name={"url"} defaultValue={Api.YT.randomVideo()}/>
                        <InputGroup.Append>
                            <Button variant={"info"} type={"submit"}>Add Song</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
            </Form>
        );
    }
}