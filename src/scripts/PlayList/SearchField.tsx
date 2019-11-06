import React from "react";
import {Button, Form, InputGroup} from "react-bootstrap";
import Api from "../Api";
import ILobby from "../ILobby";
import IPlaylist from "./IPlaylist";
import ILobbyControls from "../Player/ILobbyControls";

export default class SearchField extends React.Component<{ lobby: ILobby; playlist: IPlaylist;} & ILobbyControls> {
    render() {
        const handleSubmit = (e: any) => {
            e.preventDefault();
            const form = e.target;
            form.url.disabled = true;
            this.props.addSong(form.url.value).then(()=>{
                form.url.disabled = false;
                form.url.value = Api.YT.randomVideo();
            });
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