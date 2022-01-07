import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import * as location from './89991-loading.json';
import * as success from './59945-success-confetti.json';

const defaultOptions2 = {
	loop: true,
	autoplay: true,
	animationData: success.default,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

function PreLoader2() {
	const [data, setData] = useState([]);
	const [loading, setloading] = useState(undefined);
	const [completed, setcompleted] = useState(undefined);

	useEffect(() => {
		setTimeout(() => {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => {
					console.log(json);
					setData(json);
					setloading(true);

					setTimeout(() => {
						setcompleted(true);
					}, 1000);
				});
		}, 2000);
	}, []);

	return (
		<>
			<Lottie options={defaultOptions2} height={100} width={100} />
		</>
	);
}

export default PreLoader2;
