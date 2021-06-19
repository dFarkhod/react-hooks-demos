import React from 'react';
import ComponentC from './components/ComponentC';
import { UserContext } from './components/userContext';
function App() {
	return (
		<div>
			<UserContext.Provider value={'Farhod'}>
				<ComponentC />
			</UserContext.Provider>
		</div>
	)
}

export default App
