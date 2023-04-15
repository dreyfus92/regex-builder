import { useState } from 'react'
import { Button } from './Button'
import { CopyToClipboard } from './CopyToClipboard'
import type { FC } from 'react'

export const RegexGen: FC = () => {
	const basePrompt = 'Write me a JavaScript regular expression that '
	const [prompt, setPrompt] = useState<string>('')

	const getFinalPrompt = (basePrompt: string, prompt: string) => {
		if (basePrompt !== '' && prompt !== '') {
			return basePrompt + prompt
		} else {
			return '/[a-z]/'
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPrompt(e.target.value)
		console.log(prompt)
	}
	return (
		<>
			<div className='text-white'>
				<p className='py-4'>Write me a JavaScript regular expression that…</p>
				<div className='relative w-full min-w-[200px]'>
					<textarea
						className='peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-white border-t-white bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
						placeholder=' '
					></textarea>
					<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-indigo-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
						matches a lowercase letter
					</label>
				</div>
			</div>
			<div className='text-white'>
				<div className='flex gap-x-2 py-4'>
					<Button>Generated RegEx</Button>
					<CopyToClipboard text={getFinalPrompt(basePrompt, prompt)} />
				</div>
				<div className='flex'>
					<p>Test String</p>
					<div className='relative h-10 w-full min-w-[200px]'>
						<input
							className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-white bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
							placeholder=' '
						/>
						<label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Input Medium
						</label>
					</div>
				</div>
			</div>
		</>
	)
}
