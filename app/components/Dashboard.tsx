'use client';

import { useState } from 'react';
import { Item } from '../page';
import { GroupMember } from './NewGroup';
import { useModalContext } from '../context/ModalContext';

interface DashboardProps {
	items: Item[];
}

function List({ member }: { member: GroupMember }) {
	return (
		<li className='flex justify-between space-y-3'>
			<span>{member.name}</span>
			<span>0원</span>
		</li>
	);
}

function Dashboard({ items }: DashboardProps) {
	const { hasDialog, onCancelDialog, onCloseModal, onPutDialog, onPutModal } =
		useModalContext();
	const [item, setItem] = useState<Item>(items[0]);

	const makeConsoleModal = () => {
		return (
			<article>
				<section>section1</section>
				<section>
					<button>add</button>
				</section>
				<section>section2</section>
			</article>
		);
	};
	return (
		<div className='h-full'>
			<header className='p-5 space-y-6 text-white shadow-xl'>
				<div className='flex justify-between items-center'>
					<button onClick={() => onPutModal(makeConsoleModal())}>
						<img
							className='w-6 h-6'
							src='/assets/hamburger.svg'
							alt='console menu'
						/>
					</button>
					<h1>{item.title}</h1>
					<button>
						<img
							className='w-6 h-6'
							src='/assets/ellipsis-vertical.svg'
							alt='options'
						/>
					</button>
				</div>
				<nav className='text-center'>
					<button className=' px-4 py-3 rounded-3xl   bg-orange-300/60'>
						Overview
					</button>
					<button className=' px-4 py-3 rounded-3xl'>Expenses</button>
				</nav>
			</header>
			<main className='bg-[#f6f6f6] flex flex-col h-full'>
				<aside className='flex bg-yellow-400'>
					<figure>
						<img src='https://picsum.photos/1280/720' alt='cover' />
					</figure>
				</aside>
				<ul className='bg-white shadow-inner p-6'>
					{item.members.map(m => (
						<List member={m} />
					))}
				</ul>
				<div className='flex justify-center p-8'>
					<button className='bg-white p-4 rounded-3xl shadow-lg text-orange-600'>
						Settle up
					</button>
				</div>
			</main>
		</div>
	);
}

export default Dashboard;
