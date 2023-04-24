import 'prismjs/themes/prism-solarizedlight.css'

import Prism from 'prismjs'
import { FC, useState } from 'react'
import Editor from 'react-simple-code-editor'

import { Button } from './Button'

export type CodeblockProps = {
	regex: string
	test: string
}

export const Codeblock: FC<CodeblockProps> = ({ regex, test }) => {
	const [matches, setMatches] = useState<Array<string>>([])

	const codeBlock = `
	const regex = ${regex}
	const t = ${test};
	const matches  = t.match(regex);

	// "print" is a special function that will log the results of your regex matches 
	// to the textfield below the code editor
	print(matches)
	`

	const testRegex = (regexRule: string, testSt: string) => {
		const regex = new RegExp(regexRule)
		const t = testSt
		const matches = t.match(regex)

		if (matches) {
			setMatches(matches)
		}
	}

	const [code, setCode] = useState(codeBlock)

	return (
		<div className='flex flex-col gap-4'>
			<Editor
				className=' rounded-xl p-4 w-full md:w-[450px]'
				tabSize={4}
				value={code}
				onValueChange={(code) => {
					setCode(code)
				}}
				highlight={(code) => Prism.highlight(code, Prism.languages.js, 'js')}
				padding={10}
				style={{
					fontFamily: '"Fira code", "Fira Mono", monospace',
					fontSize: 12,
					backgroundColor: '#282c34',
					color: '#fff'
				}}
			/>
			<Button onClick={() => testRegex(`${regex}`, test)}>Run</Button>
			{matches && (
				<div className='text-white'>
					<ul>
						<li>[</li>
						{matches.map((match, i) => (
							<li key={i} className='ml-4'>
								"{match}"
							</li>
						))}
						<li>]</li>
					</ul>
				</div>
			)}
		</div>
	)
}
