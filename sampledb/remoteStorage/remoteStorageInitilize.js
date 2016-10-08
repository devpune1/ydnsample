function loadRemoteStorageData(){
    
    
    
     RemoteStorage.config.changeEvents.window = false;


    remoteStorage.access.claim('bicnet','rw');


    remoteStorage.displayWidget();

    remoteStorage.bicnet.init();

   remoteStorage.bicnet.getUserData().then(function(userData){
        
        for(var items in userData){
            
           // db.put(userTable,userData[items]).then(function(x) {
                            
                            // });
                
                
            
            
            
        }
        
        
        
        
        
    });
    
    
    
    
    
    
}


   
 