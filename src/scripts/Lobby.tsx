import React from 'react';

export default class Lobby extends React.Component {
	constructor(props: any){
		super(props);
		Api.lobby.get(props.match.params.hash).then((lobby: any)=>{
			this.setState({ lobby });
		});
	}
	}

	render(){
		const {lobby} = this.state;
		return (lobby) ? (lobby.isOwner) ? (<Host {lobby}/>) : (<Client {lobby}/>) : (<h4>Website loading</h4>);
	}
}
