import { Component } from 'react';
import { withRouter } from 'next/router';

class ClientsDetailPage extends Component {
	loadProjectHandler = () => {
		this.props.router.push(`/clients/${this.props.router.query.clientId}/projectA`);
	};

	render() {
		const { clientId } = this.props.router.query;

		return (
			<div>
				<h1>{clientId}</h1>
				<button onClick={this.loadProjectHandler}>Load Project A</button>
			</div>
		);
	}
}

export default withRouter(ClientsDetailPage);
