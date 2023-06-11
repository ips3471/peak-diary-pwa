'use client';

import { Metadata } from 'next';
import './globals.css';
import { ModalContextProvider } from './context/ModalContext';

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
			<body className='h-screen bg-gradient-linear'>
				<ModalContextProvider>
					<main className='h-full'>{children}</main>
				</ModalContextProvider>
			</body>
		</html>
	);
}
