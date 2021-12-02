import React, { Dispatch, ChangeEvent, MouseEvent, useState } from 'react'
import slugify from 'slugify'

interface IProps {
  result: string
}

interface IState {
  input: string
}

export default function UserInput({
  result,
  setResult,
}: {
  result: IProps['result']
  setResult: Dispatch<IProps['result']>
}) {
  const [input, setInput] = useState<IState['input']>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setResult(slugify(input).toLowerCase())
    setInput('')
  }

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-5">
        <div className="p-5 bg-white rounded-md border border-accents-1 shadow-md">
          <div className="mb-10">
            <label htmlFor="input" className="block text-accents-7 mb-4">
              Input: string
            </label>
            <input
              type="text"
              className="outline-none block w-full h-12 border-b-2 border-dark transition-all hover:border-cyan focus:border-cyan"
              placeholder="a string"
              onChange={handleChange}
              value={input}
              name="input"
              id="input"
            />
          </div>
          <button
            className="text-light bg-dark h-10 text-sm capitalize border border-dark min-w-200 shadow-sm rounded-md px-5 transition-opacity duration-200 ease hover:opacity-90"
            onClick={handleClick}
          >
            Generate Slug
          </button>
        </div>
      </div>
    </section>
  )
}
