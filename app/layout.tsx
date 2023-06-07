import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'We-Account',
	description: 'help to split group bills',
	manifest: '/manifest.json',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body>{children}</body>
		</html>
	);
}
