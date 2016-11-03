function loadRemoteStorageData(){
    
     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
    
     RemoteStorage.config.changeEvents.window = false;


    remoteStorage.access.claim('bicnSy','rw');


    remoteStorage.displayWidget();

    remoteStorage.bicnSy.init();

   remoteStorage.bicnSy.getUserData().then(function(userData){
        
        for(var items in userData){
            
          
              // removeDuplicate(userData[items]);
            
            
            
        }
        
        
        
        console.log("data added")
        
    });
    
    
    
    
    
    
}

    
    function removeDuplicate(object){
     
   console.log(   "1");
                  
  var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;

 console.log(   "2");
 
 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 
 console.log("3");
 db.executeSql('SELECT * FROM  user').then (function(results) {
   
   
 if(results.length){
        

        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {
    
                  userData  = results[numberOfItem];
                  
                    console.log( (object) );
                   console.log("old"+(userData) );
                
                  
                  
                    console.log( (object.userinfo) );
                    
                    
                    if((userData.userinfo) !==  (object.userinfo)){
                        
                             count = count + 1;
                             
                    
                    }
                    else{
                        
                        
                        count = 0;
                        
                        break;
                        
                    }
                    
                   
                    
                
             }
             console.log(count);
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
   
 

    
    function convertJsonToObject(userdata){
        
        var object = "";
        
        object = JSON.parse(userdata) ;
        
        
        return object;
        
        
    }