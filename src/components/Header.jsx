import React from 'react'
import Bee from './Bee'

function Header({title, subtitle}) {
  return (
    <div className='Welcome'>
        <Bee className="IBM-bee-Header" />
        <p style={{
            marginTop: "0.5rem"
        }}>
            {title}
            {subtitle && <span style={{
                fontWeight: "bold"
            }}>{subtitle}</span>}
        </p>
        <div></div>
    </div>
  )
}

export default Header