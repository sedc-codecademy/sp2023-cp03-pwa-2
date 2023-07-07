import React from 'react'
import { NavLink } from 'react-router-dom'
const UserIcon = () => {
  return (
    <NavLink to={"/User-Info"}>
    <div className="icon contact-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28.33 37.68"
        className="svg-icon"
      >
        <path d="M14.17 14.9a7.45 7.45 0 1 0-7.5-7.45 7.46 7.46 0 0 0 7.5 7.45zm0-10.91a3.45 3.45 0 1 1-3.5 3.46A3.46 3.46 0 0 1 14.17 4zM14.17 16.47A14.18 14.18 0 0 0 0 30.68c0 1.41.66 4 5.11 5.66a27.17 27.17 0 0 0 9.06 1.34c6.54 0 14.17-1.84 14.17-7a14.18 14.18 0 0 0-14.17-14.21zm0 17.21c-6.3 0-10.17-1.77-10.17-3a10.17 10.17 0 1 1 20.33 0c.01 1.23-3.86 3-10.16 3z" />
      </svg>
    </div>
  </NavLink>
  )
}

export default UserIcon