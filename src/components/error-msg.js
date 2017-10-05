import React from 'react';

let ErrorMsg = ({ error }) => (
	<div>
		{ error &&
				error
		}
	</div>
);

export default ErrorMsg;