import React from "react"
import './Navbar.css'
function Navbar(){
    return(
        
        <div>
<div class="main">
<div class="navbar">
    <div class="icon">
        <h2 class="logo">Scheduler</h2>
    </div>

    <div class="menu">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICE</a></li>
            <li><a href="#">DESIGN</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">PROFILE</a></li>
        </ul>
    </div>

</div> 
<div class="content">
    <h1>Manage Your Day</h1>
    <p class="par"></p>

        <button class="cn"><a href="#">GET STARTED</a></button>
    </div>
</div>
</div>
)
}
export default Navbar;
