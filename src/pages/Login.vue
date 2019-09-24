<template> 
  <div class="form-row" align = "center">
    <card style="width: 60rem;height: 30rem;">
          <img  src="img/logo.png" alt="..." width="300" height="150">  
   
     <div class="col-md-6 pr-md-1"  align = "left">
      <base-input label="CPF"
                  type="user"
                  placeholder="CPF">
          
          
      </base-input>
      </div>
      <div  class="col-md-6 pr-md-1" align = "left">
      <base-input label="Senha"
                  type="password"
                  placeholder="Senha">
      </base-input>
      <base-button block type="default" native-type="submit">Logar
      </base-button>
     </div>
    <div class="form-row" style ="text-align:center" >
    
    <div class="col-sm-3" style ="text-align:right"></div>
    
    <div class="col-sm-3" style ="text-align:left">
       <img  src="img/logo.png" alt="..." width="100" height="50" align = "left" border= "0">
       
    </div>
    
  
    <div class="col-md-3" style="background-color:;line-height:50px;vertical-align: right;">
      <div class= "col-md-16 pr-md-30" >
        <small slot="helperText" id="emailHelp" class="form-text text-muted"  align = "right">Esqueceu Usuario ou Senha?</small>
    </div>

<div class="col-sm-3" style ="text-align:right; background-color:#C0c0c0 !important"></div>

</div>
    </div>
  

</card>
  </div>

        
</template>

