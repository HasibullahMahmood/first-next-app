import { Component } from 'react';
import { withRouter } from 'next/router';

class BlogsPage extends Component {
	render() {
		console.log(this.props.router.query);
		return (
			<div>
				<h1>The Blogs Page</h1>
			</div>
		);
	}
}

export default withRouter(BlogsPage);
