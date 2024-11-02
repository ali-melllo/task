import React from 'react';

type PropTypes = {
	children: React.ReactNode;
}

export default async function Layout({ children }: PropTypes) {

	return (
		<div>
			{children}
		</div>
	);
}
