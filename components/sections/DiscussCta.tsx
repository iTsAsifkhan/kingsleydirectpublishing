'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function DiscussCta() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="container-box hidden md:flex">
        <button
          className="circle"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span className="get-started">
            Want to Discuss ? <br />
            Click Here
          </span>
        </button>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="discuss-title"
        >
          <div className="w-full max-w-md rounded-card bg-white p-8 shadow-card">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 id="discuss-title" className="text-2xl font-700">
                Let us discuss your book
              </h2>
              <button
                className="modal-close"
                type="button"
                aria-label="Close discussion form"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <form className="space-y-4">
              <label className="block">
                <span className="sr-only">Full name</span>
                <input name="name" type="text" placeholder="full name" />
              </label>
              <label className="block">
                <span className="sr-only">Email address</span>
                <input name="email" type="email" placeholder="email address" />
              </label>
              <label className="block">
                <span className="sr-only">Phone number</span>
                <input name="phone" type="tel" placeholder="phone number" />
              </label>
              <button className="btn btn-yellow" type="submit">
                <span className="span-1">Submit</span>
                <span className="span-2">-&gt;</span>
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}
