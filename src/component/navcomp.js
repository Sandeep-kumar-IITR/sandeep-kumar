import React from "react";
import '../css/navcomp.css'

function Navbaar() {
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light back navbarr ">
                <a class="navbar-brand" href="#">I Am Sandeep</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center " id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item navit ">
                            <a class="nav-link " href="#">Website </a>
                        </li>
                        <li class="nav-item navit">
                            <a class="nav-link" href="#">Background</a>
                        </li>
                        <li class="nav-item navit">
                            <a class="nav-link" href="#">Project</a>
                        </li>
                        <li class="nav-item navit">
                            <a class="nav-link disabled" href="#">Achivement</a>
                        </li>
                        <li class="nav-item navit">
                            <a class="nav-link disabled" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>



      

    )
}
export default Navbaar;
