import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
	const [user, setUser] = useState({});
	const [id, setId] = useState(5);
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then(response => {
				console.log(response);
				setUser(response.data);
			})
			.catch(err => {
				console.log(err);
			})
	}, [idFromButtonClick])

	const handleClick = () => {
		setIdFromButtonClick(id);
	}

	return (
		<div>
			<input type="text" value={id} onChange={e => setId(e.target.value)} />
			<button type="button" onClick={handleClick}>Fetch User</button>

			<p>
				<table style={{ textAlign: "left" }}>
					<tr>
						<th>Name</th>
						<th>Phone #</th>
						<th>Email</th>
					</tr>
					<tr>
						<td>{user.name}</td>
						<td>{user.phone}</td>
						<td>{user.email}</td>
					</tr>
				</table>
			</p>
		</div>
	)
}

export default DataFetching
