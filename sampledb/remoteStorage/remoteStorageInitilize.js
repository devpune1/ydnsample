function loadRemoteStorageData(){
    
     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
    
     RemoteStorage.config.changeEvents.window = false;


    remoteStorage.access.claim('bicSoftware','rw');


    remoteStorage.displayWidget();

    remoteStorage.bicSoftware.init();

   remoteStorage.bicSoftware.getUserData().then(function(userData){
        
        for(var items in userData){
            
          
                 removeDuplicate(userData[items]);
            
            
            
        }
        
        
        
        
        
    });
    
    
    
    
    
    
}

    
    function removeDuplicate(object){
        console.log(object)
 
    var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
  var dataItem = [];

   var userArray = ['name','password','website','hint','date'];
   
 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 

 db.executeSql('SELECT * FROM  user').then (function(results) {
   
   
 userEncryptionKey =  getSessionPassword() ;
 
  
 if(results.length){
        

       
   
        
        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {
          
                
                   
                   
                  userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);
                  
               
                   
                    if(userData.name !== decryptedData(object.name, userEncryptionKey)){
                        
                             count = count + 1;
                             
                    
                    }
                    else{
                        
                        
                        count = 0;
                        
                        break;
                        
                    }
                    
                   
                    
                
             }
             
           if(count){
                
           
                         db.put('user',object).done(function(x) {
                               
              
                             });
                           
                     
           }    
             
             
          
          
 }
 else{
     
     
      
                         db.put('user',object).done(function(x) {
                               
              
                             });
     
     
 }
 
 

      
        
        

}, function(e) {
    
  throw e;

    
});


        
        
    }
   
 
function getUserObject(userName,userAddress,userNumber,userEmail,userKey){
    
  
    
  var propertyNameArr = [ "name","password","website","hint","date"];
  var userDataArr = [userName,userAddress,userNumber,userEmail];
  var userDataObject = {};
  var items=0;
    
   var  userEncryptionKey = userKey ;
    
    //console.log( userEncryptionKey)
    
  
    
    
//console.log(userDataArr)

    for(items = 0; items < propertyNameArr.length; items++){
    

        
         userDataObject[propertyNameArr[items]] = userDataArr[items];
       
        
    }
    //console.log(   userDataObject);
    
    return userDataObject;
    
    
} 
    