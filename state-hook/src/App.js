import React, { PureComponent } from 'react'
import ClassCounter from './classCounter'

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				{
					<ClassCounter />
					//<HookCounter />
				}
			</div>
		)
	}
}

export default App
