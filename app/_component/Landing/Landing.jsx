import React from 'react'

function Landing({children}) {
  return (
    <div style={{ width: "100vw" }} className="landing">
        {children}
    </div>
  )
}

export default Landing