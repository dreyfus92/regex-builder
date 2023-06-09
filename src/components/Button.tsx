import type React from 'react'
import type { FC } from 'react'

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		React.AriaAttributes {}

export const Button: FC<ButtonProps> = (props) => {
	const { children, ...rest } = props
	return (
		<button
			{...rest}
			className='text-white flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-red-700 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none active:scale-95'
		>
			{children}
		</button>
	)
}
