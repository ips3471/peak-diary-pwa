import Image from 'next/image';
import Welcome from './components/Welcome';
import NewGroup, { GroupMember } from './components/NewGroup';
import { ReactNode, useState } from 'react';
import Dashboard from './components/Dashboard';

export type Item = {
	id: string;
	title: string;
	members: GroupMember[];
};

export async function getItems() {
	// fetch...
	return [];
}

export default async function Home() {
	const members1: GroupMember[] = [
		{ id: '1', name: '대승' },
		{ id: '2', name: '은영' },
		{ id: '3', name: '명섭' },
		{ id: '4', name: '재연' },
	];
	const items: Item[] = [
		{ id: 'item1', title: 'title1', members: members1 },
		{ id: 'item2', title: 'title2', members: [{ id: '5', name: '대승' }] },
	];

	return <>{items.length == 0 ? <NewGroup /> : <Dashboard items={items} />}</>;
}
