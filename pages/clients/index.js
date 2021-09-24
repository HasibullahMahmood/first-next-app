import { Component } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const clients = [
	{ id: 'max', name: 'Maximilian' },
	{ id: 'manuel', name: 'Manuel' },
];

class ClientsPage extends Component {
	render() {
		return (
			<div>
				<h1>Clients Page</h1>
				<ul>
					{clients.map((item) => (
						<ul key={item.id}>
							<li>
								<Link href={`/clients/${item.id}`}>{item.name}</Link>
							</li>
						</ul>
					))}
				</ul>
			</div>
		);
	}
}

export default withRouter(ClientsPage);
