import React, {
	useEffect,
	useState,
	useCallback,
	useMemo,
	useRef,
} from 'react';
import './MessageField';

class MessageField extends React.Component {
	render() {
		return (
			<>
				<h1 className='red' style={{ top: '25px', color: 'wheat' }}>
					Hello React !!!!
				</h1>
			</>
		);
	}
}

export default MessageField;
