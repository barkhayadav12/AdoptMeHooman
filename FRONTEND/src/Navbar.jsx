import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-xxl">
      <a class="navbar-brand" href="#">FurryMate</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="#main-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> 
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/adopt">Adopt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/donate">Donate</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/support">Support us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/report">SOS Report</a>
         </li>
        </ul>
        </div>
      </div>
  </nav>
    </div>
  )
}

export default Navbar