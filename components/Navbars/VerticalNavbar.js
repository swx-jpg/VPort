import React, { useEffect, useState } from "react";
import Link from "next/link";
// components






export default function Navbar(props) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  

  return (
    <>
      <div class="vertical-nav shadow-xl bg-white" id="sidebar">
        <div class="py-4 px-3 mb-4 bg-light">
          <div class="media d-flex align-items-center">
            <div class="media-body">
              <Link href="/"><h4 class="m-0">Afonso Carvalho</h4></Link>

              <p class="font-weight-light text-muted mb-0">Video and Photo</p>
            </div>
          </div>
        </div>

        <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark font-italic bg-light">
              <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
              Works
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark font-italic">
              <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
              About
            </a>
          </li>
          {/* <li class="nav-item">
            <a href="#" class="nav-link text-dark font-italic">
              <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
              Services
            </a>
          </li> */}

        </ul>

        <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Works</p>

        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark font-italic">
              <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
              Music Videos
            </a>
          </li>
          <Link href="/concertCoverage">
            <li class="nav-item">

              <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
              Concert Coverage
            </li>
          </Link>


        </ul>
      </div>
    </>
  );
}
