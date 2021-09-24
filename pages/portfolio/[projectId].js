import { Component } from 'react';
import { withRouter } from 'next/router';

class PortfolioDetailPage extends Component {
	render() {
		const { projectId } = this.props.router.query;
		return (
			<div>
				<h1>{projectId}</h1>
			</div>
		);
	}
}

export default withRouter(PortfolioDetailPage);
