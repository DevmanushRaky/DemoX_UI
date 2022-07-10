import React from 'react'

function Navbar() {
  return (
    <>
       <nav className="navbar navbar-light bg-light">
        <div className="container-fluid nav_bar">
         <a className="navbar-brand p-3" href="/"><h3><strong>Home</strong></h3></a>
         <form className="d-flex">
          <input className="form-control me-2 search-box" type="search" placeholder="Search" aria-label="Search"/>
         </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar