import React from 'react'

export default function Cursor() {
  return (
    <div className="cursor js-cursor">
      <div className="cursor__wrapper">
        <div className="cursor__follower js-follower"></div>
        <div className="cursor__label js-label"></div>
        <div className="cursor__icon js-icon"></div>
      </div>
    </div>
  )
}
