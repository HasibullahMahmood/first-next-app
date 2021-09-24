import { Component } from 'react';
import { withRouter } from 'next/router';

class ClientProjectDetail extends Component {
	render() {
		const { clientProjectId } = this.props.router.query;
		console.log(this.props.router.query);
		return (
			<div>
				<h1>{clientProjectId}</h1>
			</div>
		);
	}
}

export default withRouter(ClientProjectDetail);
