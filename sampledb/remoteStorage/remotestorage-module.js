




/* Creating remote storage module where we define data type,descriptio,type which tell s type of data added and also define  fucntion */



RemoteStorage.defineModule('bicnet', function(privateClient) {
    
  privateClient.declareType('data', {
    
    type: 'object',
    description : 'User Data',
    properties: {
      
      name: { type: 'string' },
      
      password: { type: 'string' },
      
      website: { type:'string' },
  
      hint: { type: 'string' },
      
     
      
      
    },
    
    required: ['name','password','website','hint']
    
  });

  return {
    
      
    exports: {
      

      init: function() {
        
          
       privateClient.cache('');
       
       
       
      },

      on: privateClient.on,

      addUserData: function(type,Id,userData) {
          
        var Id = Id.toString();
        
       
       
        return privateClient.storeObject('data',Id,userData);
        
        
      },
      
      
      editUserData: function(userId,userData) {
        
       var newId = newId.toString().replace(/\s|\//g, '-');
      
         return privateClient.storeObject('data',userId,userData);
         
      },

      removeUserData: function(userId) {
          
      userId = userId.toString().replace(/\s|\//g, '-');
     
      
      
          return  privateClient.remove(oldID);
      },

      getUserData: function() {
          
        return privateClient.getAll('');
        
      }, 
      
     
     getById: function(obj) {
       
     
     obj = obj.toString().replace(/\s|\//g, '-');
     
              return privateClient.getObject(obj);
                    
                }
      
      
      

    }
  };

});
