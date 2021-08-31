import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
class MApp extends React.Component {
	render() {
		return (
			<>
				<h1>Welcome to REACT!</h1>
				<App />
			</>
		);
	}
}
ReactDOM.render(<MApp />, document.getElementById('app'));
