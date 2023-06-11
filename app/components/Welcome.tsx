import { MovePage, NewGroupProps } from './NewGroup';

interface WelcomeProps {
	page: number;
	setPage: MovePage;
}

function Welcome({ setPage, page }: WelcomeProps) {
	return (
		<article className='flex text-center space-y-16 flex-col items-center justify-center h-full'>
			<section>
				<p className='text-white mb-6 text-2xl'>시작해볼까요?</p>
				<p className='text-white/60'>
					새로운 그룹을 형성하여 정산을 시작해보세요
				</p>
			</section>

			<section>
				<button
					onClick={() => setPage(page + 1)}
					className='bg-white p-5 rounded-[3rem] text-orange-300 font-semibold'
				>
					새 그룹 만들기
				</button>
			</section>
		</article>
	);
}

export default Welcome;
