import React from "react";
import Link from "next/link";

const Navbar = () => {

    return (
        <div>
<header>
      <div class="container">
        <div id="branding">
          <h1><span class="highlight">Acme</span> Web Design</h1>
        </div>      
      </div>
    <nav>
          <ul>
<Link legacyBehavior href="./">
            <li class="current"><a>Home</a></li>
</Link>

<Link legacyBehavior href="./about">
<li><a>About</a></li>
</Link>

<Link legacyBehavior href="./services">
<li><a>Services</a></li>
</Link>
       
          
           
          </ul>
        </nav>
    </header>
        </div>
    )
}

export default Navbar;