'use client'

import { useState } from 'react'
import { MessageCircle, X, Phone, Mail } from 'lucide-react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  return (
    <div className="chat-widget" aria-live="polite">
      {open && (
        <div className="chat-bubble" role="dialog" aria-label="Contact options">
          <div className="chat-bubble-header">
            <span className="chat-bubble-title">Get in Touch</span>
            <button
              className="chat-bubble-close"
              type="button"
              aria-label="Close contact panel"
              onClick={() => setOpen(false)}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="chat-bubble-body">
            <a
              href="https://wa.me/18554297565"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-option"
            >
              <span className="chat-option-icon chat-option-icon--green">
                <MessageCircle size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>WhatsApp</strong>
                <br />
                <small>Chat with us now</small>
              </span>
            </a>
            <a href="tel:+18554297565" className="chat-option">
              <span className="chat-option-icon chat-option-icon--blue">
                <Phone size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>Call Us</strong>
                <br />
                <small>+1(855) 429-7565</small>
              </span>
            </a>
            <a href="mailto:info@bookpublishingpartner.com" className="chat-option">
              <span className="chat-option-icon chat-option-icon--yellow">
                <Mail size={18} aria-hidden="true" />
              </span>
              <span>
                <strong>Email Us</strong>
                <br />
                <small>info@bookpublishingpartner.com</small>
              </span>
            </a>
          </div>
        </div>
      )}

      <button
        className="chat-fab"
        type="button"
        aria-label={open ? 'Close contact panel' : 'Open contact panel'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      </button>
    </div>
  )
}
