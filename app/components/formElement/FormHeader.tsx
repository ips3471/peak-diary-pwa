import { FormNextStep, MovePage } from '../NewGroup';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

interface FormHeaderProps {
	textForNext: string;
	nextCallback: () => void;
	prevCallback: () => void;
}

function FormHeader({
	textForNext,
	nextCallback,
	prevCallback,
}: FormHeaderProps) {
	return (
		<header>
			<nav className='flex justify-between'>
				<button onClick={prevCallback}>
					<ArrowLeftIcon className='w-7 h-7 text-white' />
				</button>
				<button className='text-white' onClick={nextCallback}>
					{textForNext}
				</button>
			</nav>
		</header>
	);
}

export default FormHeader;
