import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function App() {
return (
	<div style={{ width: 700,
				padding: 30 }}>

	<Dropdown>
		<Dropdown.Toggle variant="success">
		Update
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item href="/edu">
			Education
		</Dropdown.Item>
		<Dropdown.Item href="/exp">
			Experience
		</Dropdown.Item>
		<Dropdown.Item href="/skills">
			Skills
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
	</div>
);
}
