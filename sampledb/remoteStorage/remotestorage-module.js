




/* Creating remote storage module where we define data type,descriptio,type which tell s type of data added and also define  fucntion */



RemoteStorage.defineModule('bicnSy', function(privateClient) {
    
  privateClient.declareType('UserData', {
    
    type: 'object',
    description : 'User Data',
    properties: {
      
      
      
      userinfo : { type : 'string'},
      
      website: { type:'string' },
  
      hint: { type: 'string' },
      
     date : {type : 'number'}
     
      
    },
    
    required: ['userinfo']
    
  });

  return {
    
      
    exports: {
      

      init: function() {
        
          
       privateClient.cache('');
       
       
       
      },

      on: privateClient.on,

      addUserData: function(type,Id,userData) {
          
        var Id = Id.toString().replace(/\s|\//g, '-');
        
       
       
        return privateClient.storeObject('UserData',Id,userData);
        
        
      },
      
      
      editUserData: function(userId,userData) {
        
       userId = userId.toString().replace(/\s|\//g, '-');
      
         return privateClient.storeObject('UserData',userId,userData);
         
      },

      removeUserData: function(userId) {
          
      userId = userId.toString().replace(/\s|\//g, '-');
     
      
      
          return  privateClient.remove(userId);
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
