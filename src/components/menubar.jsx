const Menubar = (data) => {
   
  
   
    return (
        <div>
            <nav>
                <div className="conatiner">
                 <div class="navbar">
                 <div class="logo">Logo</div>
                 
                 <input class="navbar__checkbox" type="checkbox" id="navbar_check"/><label for="navbar_check" class="navbar__open">
                 &#9776; </label>
                 
    <div class="menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>
     </div> 
            </div></nav>
            
   
    
        </div>
    
    );
    
}


export default Menubar;