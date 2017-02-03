function loadRemoteStorageData(){

     var userName = sessionStorage.getItem('userinfo') ;
     var userProfile = sessionStorage.getItem('databaseName');
     var db = getUserDatabaseObject(userProfile);
     var userFolderName ="Records";
     RemoteStorage.config.changeEvents.window = false;


    remoteStorage.access.claim('bicnSystCorp','rw');


    remoteStorage.displayWidget();

    remoteStorage.bicnSystCorp.init(userProfile+"/"+userFolderName);
    

    
   remoteStorage.bicnSystCorp.getUserData('Data').then(function(userData){

    

        for(var items in userData){

            console.log("====================++++++");
            
             console.log(userData[items])
            removeDuplicate(userData[items]);
                
                
            clearRemoteStorage();

        }



     
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

                    console.log( object );
                  



                    console.log( (object.userdate) );


                    if((userData.userdate) !==  (object.userdate)){

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




    function convertJsonToObject(userdata){

        var object = "";

        object = JSON.parse(userdata) ;


        return object;


    }





function clearRemoteStorage(uniqueKey){

reloadTable()
}









function loadRemoteStorageRecords(){
    
        RemoteStorage.config.changeEvents.window = false;
         remoteStorage.access.claim('bicnSystCorp','rw');
         remoteStorage.displayWidget(false);
         
    if(remoteStorage.connected){
         
         accessRemotestorageData();
         console.log(" connected")
         
    }else{
      
      
        console.log("not connected")
    }
    

    
}



function accessRemotestorageData(){
    
    
    var mainFolder = "RegistrationRecord";
    var databaseName = 'Records';
    
     var userProfile = sessionStorage.getItem('databaseName');
     
     var db =  getUserInfoDatabaseObject();
     
    
    

    remoteStorage.bicnSystCorp.init(userProfile+"/"+mainFolder);
    

    
   remoteStorage.bicnSystCorp.getById(userProfile+"/"+mainFolder).then(function(userData){

      db.put('userinfo',userData).done(function(x) {


                             });




     
    });





    
}


 
