import type { FC } from 'react'
import { useState } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-dark.css'

export interface CodeblockProps {}

export const Codeblock: FC<CodeblockProps> = () => {
	const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`)
	return (
		<Editor
			className='border-[1px] border-white bg-white h-'
			value={code}
			onValueChange={(code) => setCode(code)}
			highlight={(code) => highlight(code, languages.js, 'javascript')}
			padding={10}
		/>
	)
}
