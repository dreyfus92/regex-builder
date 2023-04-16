import 'prismjs/themes/prism-solarizedlight.css'

import Prism from 'prismjs'
import type { FC } from 'react'
import { useState } from 'react'
import Editor from 'react-simple-code-editor'

import { Button } from './Button'

export type CodeblockProps = {
	regex: string
}

export const Codeblock: FC<CodeblockProps> = ({ regex }) => {
	const codeBlock = `
	const regex  = ${regex}
	const t = "abacus";
	const matches  = t.match(regex);
	print(matches)
	`

	const [code, setCode] = useState(codeBlock)

	return (
		<div>
			<Editor
				className=' rounded-xl p-4 w-[450px]'
				tabSize={4}
				value={code}
				onValueChange={(code) => {
					setCode(code)
					console.log(code)
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
			<Button onClick={() => console.log('clicked')}>Run</Button>
		</div>
	)
}
