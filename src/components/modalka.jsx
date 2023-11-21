const Modalka = () => {
  
      
 return (
    <div>
       <div class="conatiner">
       
       <input class="openModal" type="checkbox" id="openModal"/><label for="openModal" class="openModalBtn"><div className="openModalbtncon">
       Modalni Ochish</div></label>
 <input class="closeModal" type="checkbox" id="closeModal"/>
<div id="myModal" class="modal">
  <div class="modal-content">
 <label for="openModal" class="close">
  &times;</label>
    
    <p>Modal Oyna</p>
  </div>
</div>
    </div> 
    </div>
    
 )
}
export default Modalka;