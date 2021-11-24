import React, { Dispatch, MouseEvent } from 'react'

interface IProps {
  result: string
  copy: string
}

export default function Result({
  result,
  setCopy,
}: {
  result: IProps['result']
  setCopy: Dispatch<IProps['copy']>
}) {
  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    if (result.trim() !== '') {
      console.log(result)
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-5">
        <div className="p-5 bg-white rounded-md border border-accents-1 shadow-md">
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-8">Ouput</h3>
              <div className="mb-10">{result}</div>
            </div>
            <button
              className="text-light bg-dark h-10 text-sm capitalize border border-dark min-w-200 shadow-sm rounded-md px-5 transition-opacity duration-200 ease hover:opacity-90 flex items-center justify-center gap-1"
              onClick={handleCopy}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span>Copy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
