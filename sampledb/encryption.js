
 
 
 function encryptData(userData,userKey){

      var encryptedData = "";
      
      var password = userKey; // user password. 
      
        var iter= 1000; // Strengthen by a factor 
        
        var mode ='ccm'; // Mode for encryption.
        
        var keysize = 128; // 192 or 256 
        
        var iv= sjcl.random.randomWords('4','0'); // Intial Vector 
        
        var tag='64'; //Authentication strength 
        
        var salt = sjcl.random.randomWords('4','0'); 
        
        var adata = generateHashKey(userData); //Authenticated data 
        var rp = {}; 

        var p={}; 
        
        p.salt=salt; 
        p.iter=iter; 

        p = sjcl.misc.cachedPbkdf2(password, p); 
        
        var key=p.key; 
        
        salt=p.salt 
        
        console.log(p); 

          p = { 
              
              adata:adata, 
              
            iter:iter, mode:mode, 
          
            ts:parseInt(tag), 
            
             ks:parseInt(keysize) 
              
              
          }; 
                        
             try{         
                encryptedData = sjcl.encrypt(userKey, userData,p,rp); 
           
            
             }
             catch(e){
              console.log(e.message);
              
             }
         
           
           return encryptedData;
        
   


 }
 
 
 function generateHashKey(userKey){
    
      var hashedKey=null;
    
    
    
     hashedKey = sjcl.hash.sha256.hash(userKey);
    
      hashedKey = sjcl.codec.hex.fromBits(hashedKey);
      
    return hashedKey;
    

}

