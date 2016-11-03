function decryptData(userData,userKey){

  console.log("vale "+ userData)
  
   console.log(userKey);

   var x =  sjcl.decrypt(userKey,userData);

   console.log(x)
return x;

   
 }
 
 function decryptToPlainData(userData,userKey){

  console.log("vale "+ userData)
  
   console.log(userKey);

   var x =  sjcl.decrypt(userKey,userData);

   x = JSON.parse(x);
   
return x ;

   
 }