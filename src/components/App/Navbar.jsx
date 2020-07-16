import React from 'react';

const Navbar = () => {
  
  return (
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-primary mb-5 shadow">
      <span class="navbar-brand mb-0 h1 text-white">Alexandre MOUTAPAM</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-self-start justify-content-start" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white" href="#stack">Stack</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#competences">Compétences</a>
          </li>
        </ul>     
      </div>
      <div class="collapse navbar-collapse align-self-end justify-content-end" id="navbarNav">
        <ul class="navbar-nav d-none">
          <li class="nav-item">
            <a class="nav-link text-white" href="#">CV</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Demo</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Portfolio</a>
          </li>          
        </ul>     
      </div>
    </nav>
  )
}

export default Navbar