


function loadDb() {


  if(!window.indexedDB){

      alert("Your BrowserDo not support Indexed db");
  }

  else{


      userEncryptionKey = getSessionPassword();


db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 getDataNormalUser();

 if(userEncryptionKey  !== ''){


    sessionStorage.setItem('userKey',userEncryptionKey);





}
else{

    loadDb();

}

  }

}













/*===================================================ADD USER RECORD=========================================================*/



function getTextBoxId(){

     var userTextBoxId = ["username","userpassword","userwebsite","userhint"];


    return userTextBoxId;
}


function getData(textboxID){


     var userData = [];



  for(var items = 0; items <  textboxID.length ; items++){


    userData[items] = document.getElementById(textboxID[items]).value;



}

//userData[items++] = userDate;





return userData;




}


function createDataSource( dataSource ){

   $(document).ready(function() {

    $('#example').DataTable( {

        data:dataSource ,

        columns: [
            { title: "Name" },
            { title: "Password" },
            { title: "Website" },
            { title: "Hint" },
            { title: "Date" },
            { title: "Action" }
        ]
    } );
} );




}


/*===================================================CREATE  USER RECORD TABLE =========================================================*/



function createTable(count,userName,userPassword,userWebsite,userHint,userDate){

    var userRowNumber,userTable,createTable,userRow,userPasswordRow,userWebsiteNameRow,userNameRow,userHintRow,userDateRow,userActionButton,deleteRecord,editRecord;
     var userKey;






      deleteRecord = document.createElement('label');
    deleteRecord.id = 'deletebutton';
        deleteRecord.value="Delete" ;

     /*
    $(document).ready(function() {

        //jQuery.removeData( table, "example" );

     var t = $('#example').DataTable({

        "columnDefs": [

            {
            "targets": -1,
            "data": null,
            "defaultContent": "<button>Click!</button>"
        }



        ]
    });

  t.DataTable( {

        "columnDefs": [

            {
            "targets": -1,
            "data": null,
            "defaultContent": "<button>Click!</button>"
        }



        ]
    } );



         var userNewDate = new Date( userDate);


        userDate =  properDate(userNewDate.getDate()) + "/" + properDate(userNewDate.getMonth() + 1)  +"/" +userNewDate.getFullYear();;





        t.row.add( [


            userName,userPassword,userWebsite,userHint,userDate,deleteRecord

        ] ).draw( true );


} );





var dataSet = [count,userName,userPassword,userWebsite,userHint,userDate,"delete"];
var dataSource = []

        dataSource.push(dataSet);

        displaySortedData( dataSource,"here" );

*/



         userRow = document.createElement('tr');


          userTable=document.getElementById('usertable');
           var createTablebody = document.createElement('tbody');
          createTable=document.createElement('Table');
          createTable.id='result';

          userRow=document.createElement('tr');

          deleteRecord = document.createElement('input');
           deleteRecord.type="button";
          deleteRecord.id = 'deletebutton';
             deleteRecord.width = '30';
            //  deleteRecord.value= 'delete';
         // deleteRecord.setAttribute('src', 'images/remove.png');






          editRecord = document.createElement('input');
            editRecord.type="button";
          editRecord.id= 'editbutton';
          // editRecord.value= 'edit';
        //  editRecord.setAttribute('src', 'images/edit.png');

          deleteRecord.style.background = "edit.png" ;


          userRowNumber =document.createElement('td');
          userNameRow=document.createElement('td');
          userPasswordRow=document.createElement('td');
          userWebsiteNameRow=document.createElement('td');
          userHintRow=document.createElement('td');
          userDateRow = document.createElement('td');



          deleteRecord.onclick = function (){

               userKey = getSessionPassword();
               console.log(userDate)
               deleteData(userDate);


           }

           editRecord.onclick = function() {

                userKey = getSessionPassword();
                generateEditForm(userName,userPassword,userWebsite,userHint,userDate,userKey);

              getRecord();

          }






        console.log(userDate)
          userRowNumber.appendChild(document.createTextNode(count));
          userNameRow.appendChild(document.createTextNode(userName));
          userPasswordRow.appendChild(document.createTextNode(userPassword));
          userWebsiteNameRow.appendChild(document.createTextNode(userWebsite));
          userHintRow.appendChild(document.createTextNode(userHint));
         userDateRow.appendChild(document.createTextNode(epochToDate(userDate,userDateRow)));

           userRowNumber.width='25px';
           userNameRow.width='175px';
           userPasswordRow.width='175px';
           userWebsiteNameRow.width='175px';
           userHintRow.width='175px';
           userDateRow.width='175px';

            userRow.appendChild(userRowNumber);
            userRow.appendChild(userNameRow);
            userRow.appendChild(userPasswordRow);
            userRow.appendChild(userWebsiteNameRow);
            userRow.appendChild(userHintRow);
           userRow.appendChild( userDateRow);



            userRowNumber.width='100px';

            userActionButton = document.createElement('td');

           userActionButton.width ='150px';

           userActionButton.appendChild(deleteRecord);

           userActionButton.appendChild(editRecord);

         userRow.appendChild(userActionButton);


         createTable.appendChild(userRow);
         createTablebody.appendChild( createTable);

        userTable.appendChild(createTablebody);



}





function createTableHeader(){


    var userRowNumber,userTable,userRow,createTable,userNameRow,userWebsiteRow,userPasswordRow,userHintRow,userDateRow;
    var userDeleteButton,deleteRecord,userEditButton,editRecord;


      userNameRow = document.createElement('th');

 /*

          userNameRow.onclick = function(){




             var userData = [];
             var dataSource = []
             var table = $("table ");



            table.find('tr').each(function (i) {

                var $tds = $(this).find('td'),


            username = $tds.eq(1).text();
            userpassword = $tds.eq(2).text();
            userWebsite = $tds.eq(3).text();
            userHint = $tds.eq(4).text();
            userDate = $tds.eq(5).text();
            userImg = $tds.eq(6).text();


              userData = [ username,userpassword, userWebsite,userHint, userDate,userImg];



    });


      document.getElementById("tbodyid").innerHTML = "";
                createSortedTable(dataSource);

          }

   */

          userTable = document.getElementById('usertable');
          createTable = document.createElement('Table');
          createTable.id='headertable';
          createTable.class='tablesorter';
          createTable.style.borderColor="black";



          userRow=document.createElement('tr');
          userDeleteButton = document.createElement('th');
          userEditButton = document.createElement('th');

          userRowNumber = document.createElement('th');
          userNameRow = document.createElement('th');
          userPasswordRow = document.createElement('th');
          userWebsiteRow = document.createElement('th');
          userHintRow  = document.createElement('th');
          userDateRow  = document.createElement('th');





          userRowNumber.appendChild(document.createTextNode("No."));
          userNameRow.appendChild(document.createTextNode("User Name"));
          userPasswordRow.appendChild(document.createTextNode("User Password"));
          userWebsiteRow.appendChild(document.createTextNode("User Website"));
          userHintRow.appendChild(document.createTextNode("User Hint"));
          userDateRow.appendChild(document.createTextNode("Last Update"));



           userDeleteButton.appendChild(document.createTextNode("Action"));

           userRowNumber.width='25px';
           userNameRow.width='175';
           userPasswordRow.width='175';
           userWebsiteRow.width='175';
           userHintRow.width='175';
           userDateRow.width='175';

           userDeleteButton.width='175px';
           userEditButton.width='175px';

          userRow.appendChild(userRowNumber);
           userRow.appendChild(userNameRow);
           userRow.appendChild(userPasswordRow);
           userRow.appendChild(userWebsiteRow);
           userRow.appendChild(userHintRow);
           userRow.appendChild(userDateRow);

           userRow.appendChild(userDeleteButton);







            createTable.appendChild(userRow);

        userTable.appendChild(createTable);



}



function resetStaticCount(){

    staticCount().count = 0;

}

/*===================================================DELETE USER RECORD=========================================================*/



function deleteData(userData) {




    var flag = null;




              flag = confirm("Do you want to delete");


                    if(flag){

                 //path = JSON.parse(userRemoteID);

                   remoteStorage.bicnSystInc.removeUserData(userData);

                      deleteRecord("user",userData);


                    }





}


function deleteRecord(userTable,userId){

     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

     db.remove(userTable,userId);
                       reloadTable();

}




/*===================================================RELOAD  USER RECORD=========================================================*/


function clearTable(){


     document.getElementById('usertable').innerHTML="";

}




function getArrayOfData(userData,userProperty){


    var items = 0;
    var dataItem = [];
    var userDateRow = {};

    for(items = 0;items < userProperty.length;items++ ){

        if(userProperty[items] == 'date'){



        dataItem [items] = epochToDate(userData[userProperty[items]]);


        }
        else{

        dataItem [items] = (userData[userProperty[items]]);

        }

    }

    return dataItem;



}




function reloadTable(){



  var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
  var dataItem = [];

  var dataSource = [];
   var userArray=['userinfo','website','hint','date'];

     var userKey = getSessionPassword();
   var userDisplayArray=['name','password','website','hint','date'];
  document.getElementById('usertable').innerHTML="";

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));


 var df = db.values('user');

  df.done(function (items) {

    var n = items.length;
    
    if(n){
        
    
     createTableHeader();

    for (var i = 0; i < n; i++) {

     userData = decryptUserData((items[i]),userArray,userKey);

     createTable( i + 1 ,userData.name,userData.password,userData.website,userData.hint,userData.date);


    }
    }
else{
    
    document.getElementById('usertable').innerHTML = "No Records Found ";
    
    
    }
    
    
    
    
  } );

  df.fail(function (e) {
    console.error(e);
  });








/*


 db.executeSql('SELECT * FROM user ').then (function(results) {


 userEncryptionKey = getSessionPassword();


 if(results.length){






        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {


                  console.log(results[numberOfItem]+"key = "+userEncryptionKey);
                  //userData = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);

                         userData = decryptUserData(results[numberOfItem],userArray,userEncryptionKey);

                          console.log(  userData );
                    if(userData.name ){

                            count = count + 1;

                        dataSource.push(getArrayOfData(userData,userDisplayArray));
                         console.log(dataSource+""+count);
                       // createTable(count,userData.name,userData.password,userData.website,userData.hint,userData.date);


                    }





             }




            if(count == 0){

                 document.getElementById('usertable').innerHTML = "No Records Found ";



            }
            else{


                displaySortedData(dataSource);
                dataSource.length=0;
            }


 }

else{



                        //document.getElementById('usertable').visibility = "hidden ";
                        document.getElementById('usertable').innerHTML = "No Records Found ";






}









}, function(e) {

  throw e;


});

*/

}



function displaySortedData(dataSource,timestamp){







     $(document).ready(function() {

  $('#example').DataTable( {
        responsive: true,
        "bJQueryUI": true,
         "destroy": true,
        data: dataSource,
              columns: [
                        { title: 'Name',  className: "center", },
                        {title: 'Password' ,  className: "center",},
                        { title: 'Website',  className: "center", },
                        {title: 'Hint',className: "center", },
                       {title: 'Date',className: "center", },


                         {
                         title : 'Action',
                         default :-1,
                      className: "center",
                "defaultContent": "  <input type= 'button'  class = 'editButton' id = 'editButton'> </input><input type= 'button' id='deleteButton' class = 'deleteButton' > </input>"


                        }

                     ,
                        /*

                         {
                            render: function(o, type, data) {
                return "<a class='md-btn' onClick='deleteData(this, &quot;" + timestamp + "&quot;)'>Delete</a>";
             }
        },*/



                ],







    });




     $('#example').on('click', 'input.editButton', function (event) {

     var table = $('#example').DataTable();

     var dataSelected = table.row( $(this).parents('tr') ).data();

     var oldKey = dataSelected[0];



       generateEditForm(dataSelected[0],dataSelected[1],dataSelected[2],dataSelected[3],userKey);

      //remoteStorage.bicnSystremoveData(previoususerData.userName);

   dataSelected.length = 0;


    } );






    });











}
















function selectedButton(choice,object){


    if(choice == 'editButton'){

    }

    if(choice == 'deleteButton'){


    var dataSelected = [];
    var table = $('#example').DataTable();


 /*
$('#example tbody').on( 'click', 'td', function () {

     var userKey = getSessionPassword();
   dataSelected.push(table.cell( this ).data())

       var userDate = new Date(dataSelected[4]);
     userDate =  userDate.getTime();

            console.log("asd"+ userDate)
         deleteData( dataSelected[4].getTime());

    dataSelected.length = 0;


} );
   */



    }



}






/*===================================================GET USER RECORD=========================================================*/




function getRecord() {

        //$('#example').destroy();


  document.getElementById("usertable").innerHTML = "";

     document.getElementById("example").innerHTML = "";
  document.getElementById("demo").innerHTML = "";


 //createTableHeader();
   // setPaging();
    //addSortOption();
 reloadTable();

}










function dbClear() {

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
var flag;

flag = confirm("All Data Will Be Lost Are You Sure ?")

    if(flag){


          db.clear('user').done(function() {



        alert("All Records Inside Database  Cleared");


  });

    }
    else{



    }




}



/*===================================================SEARCH USER RECORD=========================================================*/

function searchRecord (){


     var userDate = null;
    userDate = prompt("enter Date to be searched ");

    createTableHeader();



}




/*===================================================EDIT USER RECORD=========================================================*/



function getEditDData(previousData,editedData,userKey,tableName){


 var flag = null;
 var key = null;
  var path = "";
 var userDataProperty=["name","password","website","hint","date"];

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

console.log(editedData);



  flag = confirm("Do You Want To Edit ?");



  if(flag){


                    remoteStorage.bicnSystInc.removeUserData(previousData.date);
                          console.log(previousData )
                        console.log(editedData)
                        performEditing(editedData,tableName);
                    deleteRecord(tableName,previousData.date);



                }


          //reloadTable();





      }











/*

 db.keys(tableName).done(function (keys){

 db.values(tableName).done(function(results) {

      var resultLength = results.length;
      var items=0;

          flag = confirm("Do You Want To Edit ?");

     if(flag){

     for(items = 0; items < resultLength ; items++){

                key = keys[items];






                 console.log(flag);

                    if(flag){
                          var userdate = new Date (obj.date).getTime();
                 console.log(userdate);
                               path = JSON.parse(results[items].userinfo);
                             remoteStorage.bicnSyst.removeUserData(path.ct);
                               performEditing(editedData,key,tableName);


                      break;

                }


      }



     }
     else{





                               db.put(tableName,previousData,key).done(function(x) {


                             });









      }






    });


 });
  */




function performEditing(userRecord,tableName){

    var userData =  [];
    var  userDate = new Date().getTime();
    var userKey =  getSessionPassword();
    var propertyNameArr = ["name","password","website","hint","date"];

     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));


     db.executeSql("select * from setting").then(function(data){

       var record = data[0].checkbox;




      for(var rowCount = 0 ;rowCount < record.length ; rowCount++){


        if(record[rowCount][0]){



                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])



                        switch(userInput){


                            case 0 :
                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));


                                         }
                                        else{

                                                 document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));



                                        }

                                        break;


                            case 1 :

                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = performEncryption(userRecord[rowCount],userKey);

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);



                                        }

                                        break;


                            case 2 :




                                          if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{

                                                document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]="";



                                        }




                                        break;


                             case 3 :

                                           if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);;



                                        }

                                        break;





                            default :
                            break;


                        }


        }

        else{


                                           if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);;



                                        }

        }


}


userData[rowCount] =  userDate;



      if(verifyUserData(userData)){




             var obj = getUserDataObject(userData,propertyNameArr);

            obj = createSensitiveEncryptedObject(obj,propertyNameArr,userKey)



             remoteStorage.bicnSystInc.editUserData(obj.date,obj);


              db.put(tableName,obj).done(function(x) {


              });



          window.setTimeout(function(){ clearTextBoxValue() },1000);

      }
      else{



          window.setTimeout(function(){ clearFileds() },1000);


      }












});
  //  document.getElementById('userTable').innerHTML="";

}









function setData(userData,userId){

var items = 0;



for(items = 0 ;items < userId.length; items++){


    document.getElementById(userId[items]).value = userData[items];







}






}





/*===================================================EDIT USER RECORD=========================================================*/


function generateEditForm(userName,userPassword,userWebsite,userHint,userDate,userKey){

    var editPopUp,editDiv,editForm, editUserDate;
    var userHeaderLabel,editUserName,editUserPassword,editUserWebsite,editUserHint;
    var save,cancel;
    var userNameLabel,userPasswordLabel,userWebsiteLabel,userHintLabel;
    var  previousData = {};
    var  editedData =  {};
    var userEncryptionKey = userKey;
    var popupTextBoxId = ["name","password","website","hint"];
    var userDataRecord = [];

    var propertyArray = ["name","password","website","hint","date"];
    var previousUserData = [userName,userPassword,userWebsite,userHint,userDate];

    editDiv = document.getElementById("editdiv");
    editPopUp = document.getElementById("editwindow");

     document.getElementById('editdiv').innerHTML = "";

   userHeaderLabel =  document.createElement('Label');

   userNameLabel =  document.createElement('Label');
   userPasswordLabel  = document.createElement('Label');
   userWebsiteLabel =  document.createElement('Label');
   userHintLabel =  document.createElement('Label');



    userHeaderLabel.innerHTML="EDIT PAGE";
   userHeaderLabel.id="editpage";




   userNameLabel.innerHTML="USERNAME";
   userNameLabel.id="namelabel";
   userNameLabel.style.marginLeft="15px";
   userNameLabel.style.display ="block";


   userPasswordLabel.innerHTML="PASSWORD";
   userPasswordLabel.id="passwordlabel";
   userPasswordLabel.style.marginTop="30px";
   userPasswordLabel.style.marginLeft="15px";
   userPasswordLabel.style.display ="block";

   userWebsiteLabel.innerHTML="WEBSITE";
   userWebsiteLabel.id="websitelabel";
   userWebsiteLabel.style.marginTop="25px";
   userWebsiteLabel.style.marginLeft="15px";
   userWebsiteLabel.style.display ="block";


   userHintLabel.innerHTML="HINT";
   userHintLabel.id="hintlabel";
   userHintLabel.style.marginTop="30px";
   userHintLabel.style.marginLeft="15px";
   userHintLabel.style.display ="block";




    editForm = document.createElement('form');
    editUserName = document.createElement('input');
    editUserPassword = document.createElement('input');
    editUserWebsite = document.createElement('input');
    editUserHint = document.createElement('input');
    editUserDate = generateCurrentDate();







    save = document.createElement('input');
    cancel = document.createElement('input');


    editUserName.type = 'text';
    editUserPassword.type = 'text';
    editUserWebsite.type = 'text';
    editUserHint.type = 'text';

   save.type = 'button';
    save.id = 'save';
    cancel.type = 'button';
     cancel.id = 'cancel';


    editUserName.id = 'name';
    editUserPassword.id = 'password';
    editUserWebsite.id = 'website';
    editUserHint.id = 'hint';

   save.id="save";
    cancel.id="cancel";




    editUserName.value = userName;
    editUserPassword.value = userPassword;
    editUserWebsite.value  = userWebsite;
    editUserHint.value = userHint;




     save.onclick = function(){









         console.log( userDataRecord)




        var obj = getUserDataObject(previousUserData,propertyArray );

           previousData = createSensitiveEncryptedObject(obj,propertyArray ,userKey)
         console.log( previousData)





        //editedData.push(generateCurrentDate());
        //editUserDeatils(previousData,editedData,'user')

       getEditDData(previousData, getData(popupTextBoxId),userEncryptionKey,'user');


             document.getElementById('editdiv').innerHTML = "";
            document.getElementById('editwindow').style.display = "none";

     }

     cancel.onclick = function(){

           document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";

     }


    editDiv.style.width = "400px";
    editDiv.style.height = "350px" ;
     editDiv.appendChild(userHeaderLabel);

      editDiv.appendChild(userNameLabel);
      editDiv.appendChild(editUserName);

     editDiv.appendChild(userPasswordLabel);
     editDiv.appendChild(editUserPassword);

     editDiv.appendChild(userWebsiteLabel);
     editDiv.appendChild(editUserWebsite);

     editDiv.appendChild(userHintLabel);
     editDiv.appendChild(editUserHint);

    editDiv.appendChild( save);
    editDiv.appendChild(cancel);

  document.getElementById('editwindow').style.display = "block";

    editPopUp.appendChild(editDiv);

}



function validateUserData(userDataObject,results,userEncryptionKey,userDataProperty){

    var flag = 0;


   results = decryptUserData(results,userEncryptionKey,userDataProperty);

   userDataObject = decryptUserData(userDataObject,userDataProperty,userEncryptionKey);



    console.log(results);


console.log(userDataObject);

    if(userDataObject){



    for(var items = 0; items <  userDataProperty.length ; items++){


  console.log( results[userDataProperty[items]]);

    console.log(userDataObject[userDataProperty[items]]);

            if(results[userDataProperty[items]] == userDataObject[userDataProperty[items]]){


                        flag = 1;



            }
            else {



                flag = 0 ;
                break ;
            }



    }


    }

else{


    flag = 0;


}

    return flag;


}


/*=================================================== User  Plain Object  Function =========================================================*/




function getUserDataObject(userData,propertyNameArr){


      console.log("her"+ userData)

  var userDataArr = userData;

  var userDataObject = {};

  var items = 0;


    for(items = 0; items < propertyNameArr.length; items++){


         userDataObject[propertyNameArr[items]] = userDataArr[items];


    }


    return userDataObject;




}


/*=================================================== User Encrypted Object Function =========================================================*/


function getEncryptedUserObject(userName,userPassword,userWebsite,userHint,userDate,userKey){



  var propertyNameArr = ["name","password","website","hint","date"];
  var userDataArr = [userName,userPassword,userWebsite,userHint,userDate];
  var userDataObject = {};
  var items=0;

   var  userEncryptionKey = userKey ;

    console.log( userEncryptionKey)

    userDataArr = encryptedUserData(propertyNameArr, userDataArr,userEncryptionKey);


console.log(userDataArr)

    for(items = 0; items < propertyNameArr.length; items++){



         userDataObject[propertyNameArr[items]] = userDataArr[items];


    }
    console.log(userDataObject);

    return userDataObject;


}
























/*=================================================== Clear Function=========================================================*/




function clearFileds(){


     var userID = ['username','userpassword','userwebsite','userhint'];

     for(var numberOfItem = 0 ; numberOfItem < userID.length ; numberOfItem++){




          var item = document.getElementById(userID[numberOfItem]);

          if(item.value == "Cannot Be Empty"){

          item.value = "";
          item.style.color = "black";


          }


      }



}


function clearTextBoxValue(){


     var userID = ['username','userpassword','userwebsite','userhint'];

     for(var numberOfItem = 0 ; numberOfItem < userID.length ; numberOfItem++){




          var item = document.getElementById(userID[numberOfItem]);



          item.value = "";
          item.style.color = "black";




      }



}




















/*=================================================== Validation Of User Data   Function=========================================================*/


 function validateData(){

    var userID=['username','userpassword','userwebsite','userhint'];
    var count = 0;
    var placeHolder,item;
    var numberOfItem;

    for(numberOfItem = 0 ; numberOfItem < userID.length ; numberOfItem++){

          placeHolder = document.getElementById( userID[numberOfItem]).placeholder;

           item = document.getElementById(userID[numberOfItem]);



            if ( item.value == null || item.value == '' ){



                 count = count + 1;

                 item.value = 'Cannot Be Empty';
                 item.style.color = "red";

            }




      }

       //item.style.color = "black";

   if(count == 0){


                return 1;
                 //item.style.color = "black";

            }
            else{


                  return ;

            }




 }

function setFont(){


     document.getElementById("userdetail").style.Color = "black";


}




 /*=================================================== Encryption   Function =========================================================*/












 function encryptedUserData(userProperty,userData,userEncryptionKey){



   var items = 0;
   var userDataObject = [];


   console.log(userData);


      for(items = 0; items < userProperty.length; items++){



                 if(userProperty[items] !== "date"){

                     userDataObject[items] = encryptData(userData[items],userEncryptionKey);
                 }
                 else{

                     userDataObject[items] = userData[items];

                 }

    }




    console.log( userDataObject);

  return userDataObject;

 }



 function encryptedUserInfoData(userProperty,userData,userEncryptionKey){



   var items = 0;
   var userDataObject = {};


   console.log(userProperty);
   console.log(userData);


      for(items = 0; items < userProperty.length; items++){



            if(userProperty[items] !== "date"){

                     userDataObject[userProperty[items]] = encryptData(userData[userProperty[items]],userEncryptionKey);
            }
            else{


             userDataObject[userProperty[items]] = userData[userProperty[items]]

    }


      }



  return userDataObject;

 }


 /*=================================================== Decryption   Function=========================================================*/







function getObjectKey(){


/*
  db.open(function(icursor) {
  var player = icursor.getValue();
  var key = icursor.getKey();
  var primary = icursor.getPrimaryKey();


  });



    console.


    var keyName = [];

    db.keys('user').then(function(keys) {

        db.values('user').then(function(results){
     console.log(results.getKey(0));

        });

}, function(e) {
  throw e;
});
*/


}





 function decryptAllData(userData,userKey,userArray){




         var userDecryptedData = {};
          var userEncryptionSetting ;

         for(var items = 0; items < userArray.length ; items++){



                     if(userArray[items] == "date"){


                           userDecryptedData[userArray[items]] = userData[userArray[items]];


                     }

                     else{


                          userDecryptedData[userArray[items]] = decryptData(userData[userArray[items]],userKey);




                     }







         }

         return userDecryptedData;



 }




 function decryptUserAllData(userData,userArray,userKey){





         var userDecryptedData =[];
          var userEncryptionSetting ;

         for(var items = 0; items < userArray.length ; items++){






                          userDecryptedData[items] = decryptData(userData[userArray[items]],userKey);




                     }









         return userDecryptedData;



 }


function decryptDatabaseData(userData,userArray,userKey){





         var userDecryptedData =[];
          var userEncryptionSetting ;

         for(var items = 0; items < userArray.length ; items++){





                     if(decryptData(userData[userArray[items]],userKey) == ""){


                           userDecryptedData[items] = userData[userArray[items]];


                     }

                     else{


                          userDecryptedData[items] = decryptData(userData[userArray[items]],userKey);




                     }


                     }









         return userDecryptedData;



 }




function getUserDateFormatChoice(setting ){


    switch(setting){


        case "DD/MM/YYYY" :


            return 1;
            break;

        case  "YYYY/MM/DD" :


            return  2;

        break;

         case  "MM/DD/YYYY" :


            return  3;

        break;


        default :

        return 1;

              break;

    }





}






function epochToDate(userEpochDate,userDate){

    var choice;
    var  userDateSetting = [];
    var userDate =new Date(userEpochDate);
    var userDateRow = "";

 console.log(userDate);

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

     db.executeSql("select * from setting").then(function(result){


       userDateSetting = result[0].dateFormat;






    });


    console.log( userDateSetting);
    choice = getUserDateFormatChoice(userDateSetting);



    switch( choice){

     case  1 :

                userDate =  properDate(userDate.getDate()) + "/" + properDate(userDate.getMonth() + 1)  +"/" +userDate.getFullYear();

               userDateRow = (userDate);

        break;

    case  2 :

                userDate =  userDate.getFullYear() + "/" + properDate(userDate.getMonth() + 1) +'/' +properDate(userDate.getDate())  ;

               userDateRow= (userDate);
        break;


         case  3 :

                userDate =  properDate(userDate.getMonth() + 1) +"/"+  properDate(userDate.getDate()) +"/" +userDate.getFullYear();

               userDateRow= (userDate);

        break;



        default :

                userDate =  properDate(userDate.getDate()) + "/" + properDate(userDate.getMonth() + 1)  +"/" +userDate.getFullYear();


               userDateRow = (userDate);

        break;


    }


















    return   userDateRow ;


}






function properDate(userEnteredDate){



    if(userEnteredDate < 10){



        return '0' + userEnteredDate;


    }
    else{

        return userEnteredDate ;

    }




}






/*=================================================== Pagination   Function=========================================================*/




function pagination(){




}










/* Encryption  Of Records */





/*=================================================== Generate Key    Function=========================================================*/


function generateKey(){

    var userName = [];
    var userNameLenght = 0;
    var keySize = 16;
    var userKey =[];
    var count = 0;
    var iteration = 0;
    var  masterPassword ;
    var  promptValue = "Enter Key here";


            masterPassword = prompt('Enter your value for  key ',promptValue);


            userName = masterPassword;


           if( masterPassword  == null ){


               alert("Cancel presed ");


               close();

           }


           if(  masterPassword == promptValue){

                 keyCount = staticCount();

                  if(keyCount < 3) {


                        alert("Your Attempt Made "+keyCount);
                        loadDb();

                   }
                    else{


                              window.close();


               }



           }








if(masterPassword !== 'null' || masterPassword === ''){


     userNameLenght = userName.length;


    for(var items = 0;items < keySize; items++) {

             if(count !== userNameLenght) {


                   userKey[items] = userName[count++];



             }
        else {
               count = 0;
                userKey[items] = userName[count];


            }


    }




               userKey = userKey.join('');



            if(userKey !==''){


               userKey =  generateHashKey(userKey)

               userKey = userKey.toString();



                 return userKey;

          }
           else{

                      var keyCount = staticCount();

                  if(keyCount < 3) {


                        alert("Your Attempt Made "+keyCount);
                        return userKey;
                   }
                    else{


                              window.close();


               }








}

}



}

/*=================================================== MD5 HASH   Function=========================================================*/




function getMd5Hash(){


   var name = document.getElementById("name").value;

     generateHashKey(name);

}







/*=================================================== Validation Of User Data   Function=========================================================*/


function returnProperty(value){


    var propertyName = ['name','password','website','hint'];




    for(var items = 0;items <propertyName.length ; items++){
         if(value == items){

             return propertyName[items];

         }

    }







}


function staticCount(){




    staticCount.temp  = ++ staticCount.temp || 1;



    return    staticCount.temp ;
}













/*=================================================== Retrive password stored inSession  Function=========================================================*/


function getSessionPassword(){

 return sessionStorage.getItem('userKey');


}





function removeSessionPassword(){

  sessionStorage.clear();
}

/*=================================================== Session Exit   Function=========================================================*/

function exit(){

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 db.close();
removeSessionPassword();
  db.close();

   close();




}

/*=================================================== Validation Of User Data   Function=========================================================*/

function checkRefresh(){


  if (sessionStorage.clickcount) {

   userEncryptionKey  = sessionStorage.getItem('userKey');

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));



    setDefaultSetting();

    getDataNormalUser();

} else {


   var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));



          setCurrentSetting();
    sessionStorage.clickcount = 0;

        loadDb();

}


}


/*=================================================== Validation Of User Data   Function=========================================================*/

function generateCurrentDate(){




    var curDate = new Date();

   var  currentDay = curDate.getDate();
   var currentMonth = curDate.getMonth();
   var currentYear = curDate.getFullYear();


    console.log(curDate.getTime());

    var  date = new Date(currentYear,currentMonth,currentDay);



 return date.getTime();





}


function getEpochDate(userDate){










}





function covertToTwoDigit(userDate){



    if(userDate < 10){

         userDate  = "0" + userDate.getDate();

    }




}
/*=================================================== Check  for property   Function=========================================================*/


function checkProperty(userNameProperty){





    if(userNameProperty == "website"){


        return false;

    }
    if(userNameProperty == "date"){

        return false;


    }

   return true

}




/*=================================================== Date    Function=========================================================*/







function checkLeapYear(userYear){



    if( userYear % 4 == 0){




        return true;

    }

    else{


        return  false;

    }




}






function getUserDataByDates(userDay,userMonth,userYear,property){



    var curDate= new Date();
    var year,month,day;
    var currentDate  =  curDate.getDate();
    var currentMonth = curDate.getMonth() + 1;
    var currentYear  = curDate.getFullYear();
    var userDate ;
    var numberOfDays;




for(year = userYear ; year <= currentYear ; year++ ){


    for(month = userMonth ; month <= currentMonth ; month++){



               numberOfDays = daysInMonth(month,year);


              for( day = userDay ; day <= numberOfDays ; day++){




                      userDate = day+"/"+month+"/"+year;



                       serachByUserRecord(userDate,property);



                }


                userDay = resetDate();


         }



    }







}





function resetDate(){


    return 1;


}









function  checkForLeapYear(userYear){


    if(userYear % 4 == 0 ){


        return true;


    }
    else{


        return false ;
    }





}

function toDate(userDate,dateFormat){


     var newDate = userDate.split("/");


    return new Date(newDate[2], newDate[1] - 1, newDate[0]);


}




function searchUserByDate(){


    var userDay,userMonth,userYear,search,cancel,editDiv,flag,selectChoice,optionChoice;
    var search,cancel;
    var optionData;
    var startDate,endDate;

    var month,year,day,endyear,endmonth,endday,currentYear,currentDay,endDate,currentMonth;
    var choice,editPopUp;
    var userWebsiteName,userHeaderLabel, userInputLabel , userSelectLabel ;
    var userStartDate,userEndDate, property;

    var options = ["Select Choice","By Website Name","By Dates","By Date Range"];
    var resultDiv,selectType,selectInput;
    var  currentDate = new Date();

    currentDay = currentDate.getDate();
    currentMonth = currentDate.getMonth()+1;
    currentYear = currentDate.getFullYear();






     userHeaderLabel = document.createElement('Label');
     userHeaderLabel.id= "Header";
     userHeaderLabel.type= "Label";
     userHeaderLabel.style.display = "block";

     userHeaderLabel.style.fontSize = "20px";
     userHeaderLabel.style.marginTop = 50 + "px";
     userHeaderLabel.style.marginLeft = 10 + "px";



     userHeaderLabel.innerHTML=" SEARCH  PAGE BY";
     userHeaderLabel.style.textAlign = " center ";



     userSelectLabel = document.createElement('Label');

     userSelectLabel.type= "Label";
     userSelectLabel.innerHTML= "Select Type :";

     userInputLabel = document.createElement('Label');

     userInputLabel .type= "Label";
     userInputLabel.innerHTML= "Input Selected :";


     editDiv = document.getElementById('editdiv');
     editPopUp = document.getElementById('editwindow');
     resultDiv = document.getElementById('matchresult');


     selectType = document.createElement('p');
     inputType = document.createElement('p');

     search = document.createElement('input');
     search.type="button";
     search.id="search";


     cancel = document.createElement('input');
     cancel.type="button";
     cancel.id="cancel";


     cancel.style.marginLeft = 150+"px";
     cancel.style.marginTop = 50+"px";


       cancel.onclick = function(){

           document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";

     }




                   selectChoice =  document.createElement('select');

                   selectChoice.setAttribute("id", "userChoice");
                   selectChoice.style.width = 200+"px";
                   selectChoice.style.height = 50+"px";
                   selectChoice.style.marginLeft = 100  +"px";
                   selectChoice.style.marginTop = 50  +"px";


                    optionChoice = document.createElement('option');


                    startDate = document.createElement('input');
                    startDate.id = "startdate";
                    startDate.type =" text";
                    startDate.style.marginTop = 50 +'px';

                    endDate = document.createElement('input');
                    endDate.id="enddate";
                    endDate.type="text";

                    endDate.style.marginTop = 100+'px';





    for(var i=0; i<options.length;i++){


          choice = document.createElement("option");
          choice.setAttribute("value", options[i]);

          optionData = document.createTextNode(options[i]);
          choice.appendChild(optionData);

          selectChoice.appendChild(choice);

     }














selectChoice.onclick=function(){

          choice = selectChoice.value;

          flag = getchoice(choice);



             userWebsiteName = document.createElement("input");
             userWebsiteName.id="website";
             userWebsiteName.type="text";
             userWebsiteName.placeholder="Enter Website Name Here";
             userWebsiteName.style.marginTop = 50+'px';





        if(flag == "By Website Name"){

            resultDiv.innerHTML = "";
            document.getElementById('usertable').innerHTML = "";
            userHeaderLabel.innerHTML="SEARCH BY USER WEBSITE NAME";

                    editDiv.innerHTML="";



                         search.onclick = function(){

                         property = "website";

                        createTableHeader();
                         serachByUserRecord(userWebsiteName.value, property)




                        selectType.textContent = flag;

                         inputType.innerHTML = userWebsiteName.value;

                         document.getElementById('editwindow').style.display = "none";
                         document.getElementById('editdiv').innerHTML = "";

                       }

                   cancel.style.display ="block";

                   cancel.style.marginLeft = 250 +"px";
                   cancel.style.marginTop = -40+"px";


                    selectType.textContent=flag;
                    selectType.style.marginTop = -20 +"px";
                    selectType.style.marginLeft = 200 +"px";
                    selectType.style.fontSize = 20 + "px";

                    inputType.innerHTML = userWebsiteName.value;
                    inputType.style.marginTop = -18 +"px";
                    inputType.style.marginLeft = 280 +"px";
                    inputType.style.fontSize = 20 + "px";



                    userSelectLabel.style.marginTop = -60 +"px";
                    userSelectLabel.style.marginLeft = 50 +"px";
                    userSelectLabel.style.fontSize = 20 + "px";

                    userInputLabel.style.marginTop = -80 +"px";
                    userInputLabel.style.marginLeft = 50 +"px";
                    userInputLabel.style.fontSize = 20 + "px";



                editDiv.appendChild(userHeaderLabel);
                editDiv.appendChild(userWebsiteName);

                resultDiv.appendChild(userSelectLabel);
                resultDiv.appendChild(selectType);
                resultDiv.appendChild(userInputLabel);
                resultDiv.appendChild(inputType);
                editDiv.appendChild(search);
                editDiv.appendChild(cancel);

                editPopUp.appendChild( editDiv);


        }


        if(flag == "By Dates"){

             document.getElementById('usertable').innerHTML ="";

             resultDiv.innerHTML = "";
             editDiv.innerHTML="";
             userHeaderLabel.innerHTML = "SEARCH BY DATE";





            startDate.onclick = function(){



           $('#startdate').datepicker( {


               dateFormat: 'dd/mm/yy',

                  onSelect: function(date) {
                       userStartDate = (date)
                userStartDate = toDate(date);
                       //userStartDate = new Date(userStartDate);



                      inputType.innerHTML = date;

                      console.log(userStartDate)

                 }


               }).focus();
            }
            search.onclick = function(){


                        console.log(userStartDate);
                         console.log(currentDate);

                                        if(validateByDates(userStartDate,currentDate)) {


                                                   createTableHeader();

                                                    getRecordByDates(userStartDate,userStartDate);

                                                         document.getElementById('editwindow').style.display = "none";
                                                          document.getElementById('editdiv').innerHTML = "";





                                      }

                                     else{


                                                       alert("Your Selected Date is Higher Than Current Date ");
                                                         document.getElementById('editwindow').style.display = "none";
                                                         document.getElementById('editdiv').innerHTML = "";



                                     }











            }



                  search.style.display = "block";
                   cancel.style.display ="block";


                   search.style.marginLeft = 100 +"px";
                   search.style.marginTop = 40+"px";

                   cancel.style.marginLeft = 200 +"px";
                   cancel.style.marginTop = -40+"px";



                     selectType.textContent=flag;
                     selectType.style.marginTop = -20 +"px";
                     selectType.style.marginLeft = 200 +"px";
                     selectType.style.fontSize = 20 + "px";


                      inputType.style.marginTop = -18 +"px";
                      inputType.style.marginLeft = 200 +"px";
                      inputType.style.fontSize = 20 + "px";



                    userSelectLabel.style.marginTop = -60 +"px";
                    userSelectLabel.style.marginLeft = 50 +"px";
                     userSelectLabel.style.fontSize = 20 + "px";




                    userInputLabel.style.marginTop = -60 +"px";
                    userInputLabel.style.marginLeft = 50 +"px";
                    userInputLabel.style.fontSize = 20 + "px";



























                    editDiv.appendChild(userHeaderLabel);

                     editDiv.appendChild(startDate);


                    editDiv.appendChild(search);
                    editDiv.appendChild(cancel);

                    resultDiv.appendChild(userSelectLabel);
                    resultDiv.appendChild(selectType);
                    resultDiv.appendChild(userInputLabel);
                    resultDiv.appendChild(inputType);

                    editPopUp.appendChild(editDiv);










     }




        if(flag == 'By Date Range'){




            var from = document.createElement('Label');
            var to =  document.createElement('Label');

            from.type= "Label";
            to.type= "Label";
             from.id = "from";
            to.id = "to";

            from.innerHTML ="From";
            to.innerHTML ="To";

            resultDiv.innerHTML = "";




            from.style.fontSize = "20px";
            to.style.fontSize = "20px";




             document.getElementById('usertable').innerHTML = "";

               editDiv.innerHTML="";

               userHeaderLabel.innerHTML="SEARCH BY DATE RANGE";



                 editDiv.style.width = "700px";
                 editDiv.style.height = "300px";

                 editDiv.style.marginLeft = "-300px";





                       startDate.onclick = function(){



                             $('#startdate').datepicker({


                                        dateFormat: 'dd/mm/yy',

                                          onSelect: function(date) {

                                              userStartDate = (date)
                                         userStartDate = toDate( userStartDate);

                                  }




           }).focus();



         }



                         endDate.onclick = function(){

                           //$('#enddate').datepicker({});

                             $('#enddate').datepicker({

                                 dateFormat: 'dd/mm/yy',

                              onSelect: function(date) {
                            userEndDate = (date)
                      userEndDate = toDate( userEndDate);
                 }




           }).focus();

                         }







            search.onclick = function () {





              inputType.innerHTML = "FROM DATE = "+ setDate(userStartDate)+"     "+" TO DATE = " +setDate(userEndDate);

              console.log(userStartDate);


               console.log(userEndDate);
               var  value = validateByDates(userStartDate,userEndDate);



                switch(value) {



                    case 1 :
                                     console.log(0)
                                    createTableHeader();
                                   getRecord();



                                     document.getElementById('editwindow').style.display = "none";
                                     document.getElementById('editdiv').innerHTML = "";

                                break;

                    case 2 :
                          console.log(2)
                                 createTableHeader();


                                   inputType.innerHTML = "FROM DATE = "+ setDate(userStartDate)+"    "+" TO DATE =" +setDate(currentDate);
                                     getRecordByDates(userStartDate,currentDate);



                                     document.getElementById('editwindow').style.display = "none";
                                     document.getElementById('editdiv').innerHTML = "";

                                break;


                    case 3 :
                          console.log(3)
                                 createTableHeader();

                                    var getDay = "01";
                                    var userNewDate = new Date(userEndDate.getFullYear(),userEndDate.getMonth(),getDay);


                                    inputType.innerHTML = "FROM DATE = "+ setDate(userNewDate)+"    "+" TO DATE =" +setDate(userEndDate);


                                     getRecordByDates(userNewDate,userEndDate);

                                     document.getElementById('editwindow').style.display = "none";
                                     document.getElementById('editdiv').innerHTML = "";

                                break;



                     case 4 :
                        console.log(4)
                                    createTableHeader();
                                     getRecordByDates(userStartDate,userEndDate);

                                     document.getElementById('editwindow').style.display = "none";
                                     document.getElementById('editdiv').innerHTML = "";

                                break;

   default :
   break;


}


















        }



                  search.style.display = "block";
                  cancel.style.display ="block";


                   search.style.marginLeft = 250 +"px";
                   search.style.marginTop = 40+"px";

                   cancel.style.marginLeft = 350 +"px";
                   cancel.style.marginTop = -40+"px";



                   from.style.marginTop = 180 +"px";
                   from.style.marginLeft = 20 +"px";

                   to.style.marginTop = -180 +"px";
                   to.style.marginLeft = 20 +"px";


                   startDate.style.marginTop = 40 +"px";
                   startDate.style.marginLeft = 10 +"px";

                   endDate.style.marginTop = 50 +"px";
                   endDate.style.marginLeft = 10+"px";



                    selectType.textContent=flag;
                     selectType.style.marginTop = -20 +"px";
                     selectType.style.marginLeft = 200 +"px";
                       selectType.style.fontSize = 20 + "px";


                     inputType.style.marginTop = -18 +"px";
                      inputType.style.marginLeft = 200 +"px";
                      inputType.style.fontSize = 20 + "px";



                    userSelectLabel.style.marginTop = -60 +"px";
                    userSelectLabel.style.marginLeft = 50 +"px";
                     userSelectLabel.style.fontSize = 20 + "px";

                    userInputLabel.style.marginTop = -80 +"px";
                    userInputLabel.style.marginLeft = 50 +"px";
                    userInputLabel.style.fontSize = 20 + "px";






                   editDiv.appendChild(userHeaderLabel);
                   editDiv.appendChild(from);
                   editDiv.appendChild(startDate);


              editDiv.appendChild(to);
              editDiv.appendChild(endDate);


                resultDiv.appendChild(userSelectLabel);
                resultDiv.appendChild(selectType);
                resultDiv.appendChild(userInputLabel);
                resultDiv.appendChild(inputType);

              editDiv.appendChild(search);
              editDiv.appendChild(cancel);












  }

}

                 editDiv.style.width = "400px";
                 editDiv.style.height = "280px";



      editDiv.appendChild( userHeaderLabel);
     editDiv.appendChild(selectChoice);

    editDiv.appendChild(cancel);



      document.getElementById('editwindow').style.display = "block";

    editPopUp.appendChild(editDiv);





}





function setDate(userDate){

   var dateString = null;

    if(userDate)
    {
        userDate =  new Date(userDate);

        dateString = userDate.getDate()+"/"+(userDate.getMonth() + 1) +"/"+userDate.getFullYear();
    console.log( dateString);

      return dateString;
    }
    else{


        return "empty";
;
    }

}
function validateEqualDate(startDate,endDate){



     if(startDate !== endDate){


        return false;
        }

      else{

          return false;

    }






}

function validateByDates(startDate,endDate){


  if(!checkDate(startDate) && !checkDate(endDate)){


      return 1;

  }
   if(checkDate(startDate) && !checkDate(endDate)){

      return 2;

  }


   if(!checkDate(startDate) && checkDate(endDate)){


      return 3;

  }


   if(checkDate(startDate) && checkDate(endDate)){


      return 4;

  }



}




function checkDate(userDate){


    if(userDate){


        return true;


    }
    else{


        return false;

    }



}


function getchoice(choice){


    if( choice == "By Website Name"){


        return choice;
    }

        if(choice == "By Dates"){

          return choice;
        }

         if(choice == "By Date Range"){


          return choice;
        }




}










function validateDate(startDate,endDate){


    if(startDate <= endDate){

        return true;


    }
    else{

        return false;

    }






}




function validateMonth(startMonth,endMonth){


    if(startMonth <= endMonth){

        return true;


    }
    else{

        return false;

    }






}





function validateYear(startYear,endYear){


    if(startYear <= endYear){

        return true;


    }
    else{

        return false;

    }






}




function searchByLike(userWebsiteName,recordWebsiteName){


    console.log(userWebsiteName);
   console.log(recordWebsiteName);

    var matchPattren = new RegExp(userWebsiteName);

    if(matchPattren.test(recordWebsiteName))
    {
      return true;
    }
    else{

        return false;

    }

}







function serachByUserRecord(userSearchData,userPropertyName){



  var userData = {};
  var numberOfItem = null;
  var records=0 ;
  var count =0;
  var flag = false;
 var  userEncryptionKey = getSessionPassword();
 var userArray = ['userinfo','website','hint','date'];
  var dataSource = [];

   var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

  if (userSearchData) {



      db.executeSql('SELECT * FROM user ').then(function(results){


      records = results.length ;


      if(records){



              for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {

                            console.log(results[numberOfItem])

                         //userData = results[numberOfItem];
                         userData = decryptUserData(results[numberOfItem],userArray,userEncryptionKey);

                             console.log(userData);

                               flag = searchByLike(userSearchData,userData.website);

                                console.log(flag)

                            if(flag){



                                 if(userData.website){

                                        count = count + 1 ;

                                            createTable(  count ,userData.name,userData.password,userData.website,userData.hint,userData.date);
                                       // dataSource.push(getArrayOfData(userData,userArray));




                                   }

                       }


                     }


        if(count == 0){



            document.getElementById("usertable").innerHTML="No Match For  Record Found";

        }
        else{

            //displaySortedData(dataSource)

        }




      }

      else{


           document.getElementById('usertable').visibility = "hidden ";
           document.getElementById('usertable').innerHTML = "Record Not Found";


      }




}, function(e) {

  throw e;


});



  }







}







        function daysInMonth(userMonth,userYear) {

    return new Date(userYear, userMonth, 0).getDate();

}




function getRecordByDates(startDate,endDate){


  console.log(typeof startDate+""+endDate);
var  userData = {};
var  userDate;
var property = "date";
var records;
var count=0;
 var userArray=['userinfo','website','hint','date'];
var userEncryptionKey =  getSessionPassword();
var dataSource = [];

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

      db.executeSql('SELECT * FROM user ').then(function(results){


          records = results.length ;


                   if(records){



                              for(var numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {




                                        userData  = decryptUserData(results[numberOfItem],userArray,userEncryptionKey);
                                       userDate = new Date(userData.date);
                                       userDate =  setDate(userDate) ;


                                      if(userData.name) {



                                        if(setDate(startDate) <= userDate &&   setDate(endDate) >= userDate  ){

                                          count = count + 1 ;


                                                 createTable(count,userData.name,userData.password,userData.website,userData.hint,userData.date) ;
                                        /// dataSource.push(getArrayOfData(userData,userArray));






                                       }

                                      }

                         }

                    /*
                     if(count == 0){

                         isemptyTable();
                     }
                 else{

                       displaySortedData(dataSource);
                 }
        */


     }
     }, function(e) {

  throw e;


});








}




function isemptyTable(){


                           document.getElementById("usertable").style.fontSize = "xx-large";
                           document.getElementById("usertable").innerHTML=" NO RECORD FOUND";

}













function addSortOption(){


    var addOnWindow = document.getElementById('demo');
    var sortOption =  document.createElement('Select');
    var items = 0;

      document.getElementById("usertable").innerHTML = "";
  document.getElementById("demo").innerHTML = "";



    var sortFieldName  = ["Sort By Name","Sort By Old To New Date","Sort By New To Old Date"];


     sortOption.id ="sort";

    for(items  = 0 ;items < sortFieldName.length ; items++){


        var option =  document.createElement("option");


          option.value = sortFieldName[items];


        option.appendChild(document.createTextNode(sortFieldName[items]));


          sortOption.appendChild(option);



         sortOption.onclick = function(){


             sortBy(this.value);



         }



    }


   addOnWindow.appendChild(sortOption);





}





 function sortBy(value){



        if(value == "Sort By Name"){


            getRecord();

        }



     if(value = "Sort By Old To New Date"){

           sortOldDate();
     }



     if(value = "Sort By New To Old Date"){


         sortNewDate()
     }




 }



function sortedDataByDate(){


var  userData = {};
var  userDate;
var property = "date";
 var records;
var count=0;
var dateCount = 0;
var startDate,userDate;
var sortedArray = [];

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 var userArray=['name','password','website','hint','date'];

document.getElementById("usertable").innerHTML="";

//createTableHeader();

      db.executeSql('SELECT * FROM user ').then(function(results){


          records = results.length ;


                   if(records){



                              for(var numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {







                                        userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);

                                         userDate = new Date(userData.date);

                                       for(var numberOfRecords = numberOfItem + 1 ; numberOfRecords < results.length ; numberOfRecords++) {



                                        userData  = decryptAllData(results[numberOfRecords],userEncryptionKey,userArray);

                                        startDate = new Date(userData.date);




                                        if(startDate != userDate ){








                                        }



                                       }
                              }

                   }





    }, function(e) {

  throw e;


});











}









    function dbsort(){

         var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
        db.from('user').order('date').list(10).done(function(records) {

});

    }







/*=================================================== Setting function =========================================================*/





    function userSetting(){



         userSettingWindow();




    }






    function displayPreviousSetting(userTable,settingDiv,settingPopUp,selectDateFormat,selectPagination,save,cancel){


   var settingField = ["Name", "Password","Website","Hint"];
   var settingFieldId = ["Display", "Mandatory","Encryption"];
   var  checkedFields,settingRow;

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

    db.executeSql("Select * from setting").then(function(data){

        checkedFields = data[0].checkbox ;

        if(checkedFields){

            for(var item=0; item < settingField.length ; item++){

                 settingRow = document.createElement('tr');
                settingRow.style.fontSize = "20"+ "px";
                settingRow.id = settingField[item];
                settingRow.appendChild(document.createTextNode(settingField[item]));

          for(var items = 0 ; items < settingFieldId.length ; items++){

                if( checkedFields[item][items]){

                 settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow);
                }
                else{

                     settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow)


                }

             }

        }


        }
        else{


             for(var item=0; item < settingField.length ; item++){

                 settingRow = document.createElement('tr');
                settingRow.style.fontSize = "20"+ "px";
                settingRow.id = settingField[item];
                settingRow.appendChild(document.createTextNode(settingField[item]));

          for(var items = 0 ; items < settingFieldId.length ; items++){

                if( checkedFields[item][items]){

                 settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow);
                }
                else{

                     settingRow.appendChild(addCheckBox(settingField[item],checkedFields[item][items]));
                 userTable.appendChild(settingRow)


                }

             }

        }






        }




          settingDiv.appendChild(userTable);

          save.type = 'button';
         save.id = 'save';

          cancel.type = 'button';
         cancel.id = 'cancel';


        //settingRow.style.padding = "10px";



        settingDiv.style.width =  "600px";
        settingDiv.style.height = "500px";

            save.style.marginLeft = 200 +"px";
            save.style.marginTop = 80+"px";
            save.style.display = "block";

            cancel.style.marginLeft = 300 +"px";
            cancel.style.marginTop = -40+"px";
            cancel.style.display = "block";




         settingDiv.appendChild(document.createTextNode("Date Format"));



         settingDiv.appendChild(selectDateFormat);


        settingDiv.appendChild(document.createTextNode("Pagination"));

         settingDiv.appendChild(selectPagination);

         settingDiv.appendChild(save);
         settingDiv.appendChild(cancel);

         document.getElementById('editwindow').style.display = "block";

         settingPopUp.appendChild(settingDiv);








    });



    }




    function getSettingFieldId(){


        var   settingField = ["Name", "Password","Website","Hint"];

        return  settingField;


    }

     function getSettingFieldActivityId(){


        var    settingFieldId = ["Display", "Mandatory","Encryption"];

        return settingFieldId ;


    }

function userSettingWindow(){



     var settingDiv,settingField,settingData, settingOption, settingFieldId, settingPopUp,settingData,settingCheckbox ,settingTable,settingRow, settingColumn,save,cancel;
     var  setDateFormat,selectDateFormat,settingDropDownList,selectPagination;
     var userSelectedPaging;
     var checkBoxArray = [];

     settingDiv = document.getElementById('editdiv');
     settingPopUp = document.getElementById('editwindow');
     settingDropDownList = document.getElementById('editwindow');


     /*
       settingField = getSettingFieldId();
     settingFieldId =  getSettingFieldActivityId();

     */



     settingField = ["Name", "Password","Website","Hint"];
     settingFieldId = ["Display", "Mandatory","Encryption"];
     settingOption = ["","YYYY/MM/DD","MM/DD/YYYY","DD/MM/YYYY"];


     settingTable =  document.createElement('table');


     settingData = document.createElement('td');


     save =    document.createElement('input');

     cancel =  document.createElement('input');




     var settingObj = [];


    selectDateFormat = addOptionInList(settingOption);
    selectPagination = addPagingOptionInList(settingOption);

    save.type = "button";
    cancel.type = "button";




   removeUserSetting();







     selectDateFormat.onclick = function(){



        setDateFormat = selectDateFormat.value;



     }



     selectPagination.onclick = function(){


                userSelectedPaging = selectPagination.value;


     }

     save.onclick = function(){









         /*



 for(var items = 0; items < settingField.length ; items++){

  settingObj[items] = [] ;

    for(var indexCheckbox = 0; indexCheckbox < settingFieldId.length; indexCheckbox++){



        if(settingTable.rows[items].cells[indexCheckbox].getElementsByTagName("input")[0].checked){





           settingObj[settingField[items]][settingFieldId[indexCheckbox]] = true ;




           }


           else{


            settingObj[settingField[items]][settingFieldId[indexCheckbox]] = false ;

           }





        }




    }






          */









 for(var items = 0; items < settingField.length ; items++){

  settingObj[items] = [] ;

    for(var indexCheckbox = 0; indexCheckbox < settingFieldId.length; indexCheckbox++){



        if(settingTable.rows[items].cells[indexCheckbox].getElementsByTagName("input")[0].checked){




          // settingObj[settingField[items]][settingFieldId[indexCheckbox]] = true ;

           settingObj[items][indexCheckbox] = true ;




           }


           else{

               // settingObj[settingField[items]][settingFieldId[indexCheckbox]] = false;

            settingObj[items][indexCheckbox] = false ;

           }





        }




    }



if(validateSelectedCheckbox(settingObj)){


    if(selectPagination.value){

            addUserSetting(settingObj,setDateFormat,userSelectedPaging);
            setPaging();


    }
    else{

        userSelectedPaging = 1;
        addUserSetting(settingObj,setDateFormat,userSelectedPaging);


        setPaging();


    }

           document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";
}

else{



     document.getElementById('editwindow').style.display = "inline";




}



}






      cancel.onclick = function(){



          document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";



     }










addTitleSettingTable();

displayPreviousSetting(settingTable, settingDiv,settingPopUp,selectDateFormat,selectPagination,save,cancel);




    // var checkBox =  document.createElement('input');







       // checkBox.value = "Name";







}








  function validateSelectedCheckbox(userCheckboxInput){

      var count = 0 ;
      var  uncheckedFields = [];

      for(var rowCount = 0 ;  rowCount  < userCheckboxInput.length ; rowCount++){


          if(userCheckboxInput[rowCount][0]){




          }

          else{

            var userInput = validateCheckbox(userCheckboxInput[rowCount][1],userCheckboxInput[rowCount][2])



                        switch( userInput){


                            case 0 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                        count = count + 1 ;


                                        break;


                            case 1 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                        count = count + 1 ;

                                        break;


                            case 2 :
                                        uncheckedFields.push(getUserRecordId(rowCount));
                                         count = count + 1 ;

                                        break;


                             case 3 :


                                      count = 0;
                                        break;



                            default :
                            break;


                        }


          }



}


      if(count > 0){


        alert("Please Select Display Option For " + uncheckedFields.join());

          return false;

      }
      else{


           return true;


      }








      }














    function displayMandatoryField(fieldName){



        if(fieldName == "Name"){


            return true;

        }

          if(fieldName == "Password"){


            return true;

        }


         return false;

    }






function addCheckBox(settingId,value){

        var settingCheckbox = document.createElement('input');
        var settingData = document.createElement('td');



       if(value){

         settingCheckbox.type = "checkbox";
         settingCheckbox.id = settingId;

        settingCheckbox.checked = true;




            settingCheckbox.onchange = function(){


              if(displayMandatoryField( settingCheckbox.id)){

                    settingCheckbox.checked = true;

             }

         }


           settingData.style.fontSize = "60px";
            settingData.style.fontStyle = "Arial";
           settingData.style.padding = "3px";
           settingData.style.width = "9pc";
           settingData.style.textAlign = "center";
           settingData.style.marginRight = "105px";
          settingData.appendChild(settingCheckbox);
       }

       else{


              settingCheckbox.type = "checkbox";
         settingCheckbox.id = settingId;
         settingCheckbox.checked = false;


           settingData.style.fontSize = "60px";
            settingData.style.fontStyle = "Arial";
           settingData.style.padding = "3px";
           settingData.style.width = "9pc";
           settingData.style.textAlign = "center";
           settingData.style.marginRight = "105px";
          settingData.appendChild(settingCheckbox);

       }



     return settingData;
}



function addTitleSettingTable(){


     var tableHeaderRow,tableHeaderRow,settingTable,settingPopUp ;
    var tableData;


     settingTable =  document.createElement('table');
     tableTitle = ["Fields","Display","Mandatory","Encrypted"];
     settingDiv = document.getElementById('editdiv');
     settingPopUp = document.getElementById('editwindow');

     tableHeaderRow = document.createElement('tr');
     settingTable =  document.createElement('table');
     settingDiv = document.getElementById('editdiv');
     settingPopUp = document.getElementById('editwindow');



  for(var items = 0 ; items < tableTitle.length ; items++ ){

          tableData = document.createElement('td');

          tableData.appendChild(document.createTextNode(tableTitle[items]));

          tableHeaderRow.appendChild(tableData);
  }



        settingTable.appendChild(tableHeaderRow);
        settingDiv.appendChild(settingTable);
        settingPopUp.appendChild(settingDiv);


}



function addOptionInList(optionList){

    var select,items;

    select =  document.createElement("select");
    select.style.marginLeft = 50 +"px";
    select.style.marginTop = 10 +"px";
    select.style.height = 30 +"px";
    select.style.width = 160 +"px";
    for(items = 0 ; items < optionList.length ; items++){


        var optionData  = document.createElement("option");

        optionData.appendChild(document.createTextNode(optionList[items]));

        select.appendChild(optionData);

    }


return select;

}



function addPagingOptionInList(settingOption){


    var select,items,size=25;

    select =  document.createElement("select");
    select.style.marginLeft = 0 +"px";
    select.style.marginTop = 10 +"px";
    select.style.height = 30 +"px";
    select.style.width = 160 +"px";

    for(items = 5 ; items <=  size ; items = items + 5){


        var optionData  = document.createElement("option");

        optionData.appendChild(document.createTextNode(items));

        select.appendChild(optionData);

    }


return select;

}







function addUserSetting(userCheckBoxSetting,userDateFormat,userSelectedPaging){

var db_name = 'setting';

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

userDateFormat = checkDateFromat(userDateFormat);

userSelectedPaging = checkPagingValue(userSelectedPaging);



 var obj  = {

        "checkbox"   :userCheckBoxSetting,
        "dateFormat" : userDateFormat,
         "paging"    : userSelectedPaging

    };


    db.put(db_name, obj , db_name).done(function(){

    });








}



function checkDateFromat(userDateFormat){

      var defaultDateFormat = "DD/MM/YYYY";

    if(userDateFormat){

        return userDateFormat;
    }
    else{


        return defaultDateFormat;
    }



}














function checkPagingValue(paggingValue){


  var defaultPaging = 5;

    if(paggingValue){

        return paggingValue;
    }
    else{


        return defaultPaging;
    }



}






function removeUserSetting(){

  document.getElementById("demo").innerHTML="";


}


function addCurrentPage(pageNumber){


    if(pageNumber){


     addCurrentPage.temp  = pageNumber;

}
else{


      addCurrentPage.temp  = 1;

}




    return   addCurrentPage.temp ;



}

function setPrevButtonDisable(subPagingPrev){


    subPagingPrev.style.display = 'none';
}


function  addPagination(userPaging,totalRecord){




    var data,mainPagination,subPagination,items,subPagingPrev,subPagingNext;

    var paginationWindow = document.getElementById("demo");

    var currentPage = addCurrentPage(page);


    mainPagination = document.createElement('ul');

    var noOfButton = Math.ceil(totalRecord/userPaging);
     var page ;



    var subPagingPrev = document.createElement('input');
    var subPagingNext = document.createElement('input');
    var previousPage,nextPage;

         subPagingPrev = addPagingButton(subPagingPrev,"<<");
         subPagingNext = addPagingButton(subPagingNext,">>");


       mainPagination.appendChild(subPagingPrev);

    for(items = 1 ; items <= noOfButton ; items++){

             var subPagButton = document.createElement('input');

             subPagButton = addPagingButton( subPagButton,items);





         subPagButton.onclick = function (){

            subPagingPrev.style.display = 'inline';
            subPagingPrev.style.marginLeft = "10px";

            subPagingNext.style.display = 'inline';
            subPagingNext.style.marginLeft = "10px";


              page  = this.value;

             currentPage = addCurrentPage(page);

             startPage = getStartPage(currentPage,userPaging);
             endPage   = getEndPage(currentPage,userPaging);

             paginationTable(startPage,endPage,subPagingPrev,subPagingNext);




    }


         subPagingPrev.onclick = function (){

            subPagingNext.style.display = 'inline';
            subPagingNext.style.marginLeft = "10px";



            previousPage = (currentPage - 1) ;



             startPage = getStartPage(previousPage,userPaging);
             endPage   = getEndPage(previousPage,userPaging);
             paginationTable(startPage,endPage,subPagingPrev,subPagingNext);
             currentPage = addCurrentPage(previousPage);
            //  document.getElementById('matchresult').innerHTML = ("Showing "+"   "+(startPage + 1)+ "   " + "to"+"   "+ (endPage) + "   "+ "entries" +"   " + " of "+"   "+ results.length).fontsize(10);



    }




     subPagingNext.onclick = function (){

            subPagingPrev.style.display = 'inline';
            subPagingPrev.style.marginLeft = "10px";


             nextPage = (++currentPage);
             startPage = getStartPage(nextPage,userPaging);
             endPage   = getEndPage( nextPage,userPaging);
             paginationTable(startPage,endPage,subPagingPrev,subPagingNext);

          currentPage = addCurrentPage(nextPage);

    }

          mainPagination.appendChild(subPagButton);


 }


         paginationTable(0,userPaging,subPagingPrev,subPagingNext);

         mainPagination.appendChild(subPagingNext);

         paginationWindow.appendChild( mainPagination);


}




function getStartPage(pageCount , userPaging){

    var startPage = (pageCount - 1 ) * (userPaging) ;


    return startPage;

}



function getEndPage(pageCount , userPaging){

     var endPage = (pageCount * userPaging);

     return endPage;
}



function addPagingButton(subPagButton,data){


             subPagButton.setAttribute("type","button");
             subPagButton.value = data;
             subPagButton.id ="pagingbutton" ;
             subPagButton.style.marginLeft = "10px";
             subPagButton.style.display = "inline";
             subPagButton.style.width = "20px";
             subPagButton.style.height = "20px";

    return  subPagButton;
}



function paginationTable(startPage,endPage,previousButton,nextButton){


  var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var dateArray = [];
  var dataSource = [];
   var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

   var userArray=['userinfo','website','hint','date'];

  document.getElementById('usertable').innerHTML="";


 db.executeSql('SELECT * FROM user ').then (function(results) {




 if(results.length){

          if(startPage <= 0){


        setPrevButtonDisable(previousButton)
       // paginationTable(1,endPage, previousButton,nextButton);

  }

    if(endPage > results.length-1){


     setPrevButtonDisable(nextButton) ;



  }


        userEncryptionKey = sessionStorage.getItem('userKey');


      createTableHeader();

        //alert(results.length);

        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {

                   console.log(results[numberOfItem]);

                  userData  = decryptUserData(results[numberOfItem],userArray,userEncryptionKey);

                    if(userData.website ){




                        if(startPage <= numberOfItem  &&  numberOfItem < endPage){


                             count = count + 1 ;
                             createTable(count,userData.name,userData.password,userData.website,userData,Hint,userData.date)
                           //dataSource.push(getArrayOfData(userData,userArray));



                        }



                       document.getElementById('matchresult').innerHTML = ("Showing "+"   "+(startPage + 1)+ "   " + "to"+"   "+ (endPage) + "   "+ "entries" +"   " + " of "+"   "+ results.length).fontsize(10);




                    }




        }

            if(count == 0){

                 document.getElementById('usertable').innerHTML = "No Records To Display";



            }
            else{

                displaySortedData( dataSource);


            }


 }

else{



                        //document.getElementById('usertable').visibility = "hidden ";
                        document.getElementById('usertable').innerHTML = "No Records Found ";






}









}, function(e) {

  throw e;


});



}



function setPaging(){

     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

var userPagingValue , userCheckboxValue;
var userRecords = [];
var record = [];

db.executeSql("select * from user ").then(function(data){


            record.push(data.length);



});



db.executeSql("select * from setting ").then(function(data){

 userCheckboxValue =  data[0].checkbox;
  userPagingValue = data[0].paging;

userRecords.push(userCheckboxValue);

            applyCheckboxSetting(userCheckboxValue);
           // applyMandatorySetting(userCheckboxValue);
            addPagination(userPagingValue,record[0]);





});







}







function applyCheckboxSetting(userCheckboxSetting){

   var settingField = ["Name", "Password","Website","Hint"];

    var count = 0;
    var uncheckedFields = [];
    var userUnchecked;
    var rowcount, userInput,columncount = 0;



        for(rowcount = 0 ; rowcount < userCheckboxSetting.length ;rowcount++){




                if( validateCheckBoxOption(userCheckboxSetting[rowcount][columncount]) ){


                           document.getElementById(getTextboxId(rowcount)).style.display = "inline";


              }


              else{

                      document.getElementById(getTextboxId(rowcount)).style.display = "none";


                    userInput = validateCheckbox(userCheckboxSetting[rowcount][1],userCheckboxSetting[rowcount][2])

                        switch( userInput){


                            case 0 :
                                         uncheckedFields.push(getUserRecordId(rowcount));
                                        count = count+1;
                                        break;


                            case 1 :
                                         uncheckedFields.push(getUserRecordId(rowcount));
                                        count = count+1;
                                        break;


                            case 2 :
                                         uncheckedFields.push(getUserRecordId(rowcount));
                                        count = count+1;
                                        break;


                            default :
                            break;


                        }



              }




        }

          if(count > 0){




              alert("Please Select Display Option for "+ uncheckedFields.join() );
        }






}

        function validateCheckBoxOption(userValue){



            if(userValue){

                return true;

            }
            else{

                return false;

            }



        }



function validateCheckbox(mandatory,encryption){



     if(mandatory  && encryption){




                return 0;

     }


     if(!mandatory  && encryption){




                return 1;

     }

     if(mandatory  && !encryption){




                return 2;

     }


     if(!mandatory  && !encryption){




                return 3;

     }









}



function setCurrentSetting(){

         var rowCount;

  var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));


    db.executeSql("select * from setting").then(function(data){

       if(data["checkbox"] !== undefined){

         var userCheckboxSetting = data["checkbox"];

             applyCheckboxSetting(userCheckboxSetting)
       }

       else{

             setDefaultSetting();


       }


    });



    }





function setDefaultSetting(){

     var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

   var userCheckboxSetting = getSetting();

   var obj  = {

        "checkbox"   : userCheckboxSetting,
        "dateFormat" : "DD/MM/YYYY",
         "paging"    : "10"

    };


    db.put("setting", obj ,"setting").done(function(){

    });



}


function getSetting(){




  var settingObj = [];

 for(var items = 0; items < 4 ; items++){

  settingObj[items] = [] ;

    for(var indexCheckbox = 0; indexCheckbox < 3; indexCheckbox++){


           settingObj[items][indexCheckbox] = true ;


        }

    }

return  settingObj;

}



function getTextboxId(value){


    switch(value){


        case 0  : return "username";

        break;


        case 1  : return "userpassword";

        break;


        case 2  : return "userwebsite";

        break;


        case 3  : return "userhint";

        break;

        default :

        break;


    }






}










function getUserRecordId(value){


    switch(value){


        case 0  : return "name";

        break;


        case 1  : return "password";

        break;


        case 2  : return "website";

        break;


        case 3  : return "hint";

        break;

        default :

        break;


    }






}






function applyEncryptionSetting(userSetting){



    var userEncryptionSetting = userSetting ;

     var fieldToBeEncrypted = [];

        var rowcount, columncount = 2;



        for(rowcount = 0 ; rowcount <  userEncryptionSetting.length ;rowcount++){




                if(( userEncryptionSetting[ rowcount][columncount])){


                   fieldToBeEncrypted.push(getUserRecordId(rowcount));

                }







        }



         return fieldToBeEncrypted;



}





function getFieldToBeEncrypted(userField){



    switch(userField){


        case 'Name' :

        return "name";

        break;

        case 'Password' :

        return "password";

        break;
        case 'Website' :

        return "website";

        break;
        case 'Hint' :

        return "hint";

        break;




    }









}



























function checkForEmpty(userData){



   if(userData){

       return true;

   }
   else{

       return false;

   }


}


function addUserRecords(){



     enterUserRecords();


}


function performEncryption(userData,userKey){


    if(userData){

        //userData = encryptData(userData,userKey);
        return userData;

    }
    else{


        return userData;

    }

}

function enterUserRecords(){

   var rowCount,columnCount=2;

    var  userDate = new Date().getTime();
    var  userKey  =  getSessionPassword()
    var userData = [];
    var uncheckedFields = [];
    var textboxId = getTextBoxId();
    var userRecord = getData(textboxId);
    var count = 0;
   var propertyNameArr = ["name","password","website","hint","date"];

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

    // var settingField = getSettingFieldId();
    // var settingFieldId =  getSettingFieldActivityId();


    db.executeSql("select * from setting").then(function(data){

       var record = data[0].checkbox;

      for(rowCount = 0 ;rowCount < record.length ; rowCount++){


        if(record[rowCount][0]){



                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])



                        switch(userInput){


                            case 0 :
                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));


                                         }
                                        else{

                                                 document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]=(performEncryption(userRecord[rowCount],userKey));



                                        }

                                        break;


                            case 1 :

                                         if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = performEncryption(userRecord[rowCount],userKey);

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);



                                        }

                                        break;


                            case 2 :




                                          if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{

                                                document.getElementById(getTextboxId(rowCount)).value = "Cannot Be Empty";
                                                 document.getElementById(getTextboxId(rowCount)).style.color = "red";
                                                 userData[rowCount]="";



                                        }









                                        break;


                             case 3 :

                                           if(checkForEmpty(userRecord[rowCount])){



                                                 userData[rowCount] = userRecord[rowCount];

                                         }

                                        else{


                                                 userData[rowCount]= performEncryption("Nil",userKey);



                                        }

                                        break;

                                        break;



                            default :
                            break;


                        }


        }

        else{

                var userInput = validateCheckbox(record[rowCount][1],record[rowCount][2])



                        switch( userInput){


                            case 0 :
                                        uncheckedFields.push(getUserRecordId(rowCount));

                                       userData[rowCount]= performEncryption("Nil",userKey);;

                                        break;


                            case 1 :
                                        uncheckedFields.push(getUserRecordId(rowCount));

                                       userData[rowCount]= performEncryption("Nil",userKey);;
                                        break;


                            case 2 :
                                        uncheckedFields.push(getUserRecordId(rowCount));

                                       userData[rowCount]= performEncryption("Nil",userKey);
                                        break;


                             case 3 :


                                      userData[rowCount]= performEncryption("Nil",userKey);
                                        break;



                            default :
                            break;


                        }







                    }








}


  userData[rowCount] = userDate;



      if(verifyUserData(userData)){






             var obj = getUserDataObject(userData,propertyNameArr);
               console.log(obj);
            obj = createSensitiveEncryptedObject(obj,propertyNameArr,userKey)
                //path = JSON.parse(obj.name);
                    console.log(obj);



   /*
            obj = JSON.stringify(obj);


            console.log(obj);

           obj = encryptData(obj,userKey);


            obj = JSON.parse(obj);
   */
      var userdate = new Date (obj.date);
                 console.log(userdate);

              db.put('user',obj).done(function(x) {
                  reloadTable();


                  });
              remoteStorage.bicnSystInc.addUserData("Data",obj.date,obj);




          window.setTimeout(function(){ clearTextBoxValue() },1000);
      }
      else{

          if(uncheckedFields.length > 0){

               alert("Please Select Display Option For "+uncheckedFields.join());

          }
           window.setTimeout(function(){ clearFileds() },1000);

           userData = getData(textboxId);

           setData(userData,textboxId);





      }






    });





}

function verifyUserData(userData){


    var items = 0;
    var count = 0;
    for(items = 0; items < userData.length ; items++){

        if(userData[items])
        {
          count = count + 1;

        }




    }


  if(count == items){

      return true;

  }
  else{


      return false;
  }



}


function checkRecords(userData){

var items,count;

for(items = 0 ;items < userData.length ; items++){


    if(userData[items]){

            count = 0;

    }
    else{


        count = count + 1;

    }

}



if(count){


    return false;

}
else{

    return true

}


}


function sortOldDate(){



 var numberOfItem = null;
  var userSortedData = [];
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userOldDate = [];
   var userArray=['name','password','website','hint','date'];
    var  userData = {};


 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 var setdate = "";




    document.getElementById('usertable').innerHTML="";

console.log( userOldDate);

db.executeSql('SELECT * FROM user ').then (function(results) {

 userEncryptionKey = getSessionPassword();


 if(results.length){







                    for(numberOfItem =  0 ; numberOfItem < results.length ; numberOfItem++) {

                        userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);
                        userSortedData[numberOfItem] = userData.name;



 }

}


        console.log( userSortedData.sort());

         displayRecordByOldDate(userSortedData.sort())



}, function(e) {

  throw e;


});




}






function displayRecordByOldDate(userSortedData){

var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
   var userArray=['name','password','website','hint','date'];

     document.getElementById('usertable').innerHTML="";

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 var setdate = "";



 db.executeSql('SELECT * FROM user ').then (function(results) {

 userEncryptionKey = getSessionPassword();


 if(results.length){

     // createTableHeader();





        for(var Item = 0 ; Item < userSortedData.length ; Item++) {


                  console.log("Oter="+Item);

                    for(numberOfItem =  0 ; numberOfItem <  userSortedData.length ; numberOfItem++) {



                   console.log("Inner="+numberOfItem);
                    userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);

                    if( userSortedData[Item] ===   userData.name){


                             console.log("Match="+numberOfItem);
                             count = count + 1;
                            dataSource.push(getArrayOfData(userData,userArray));
                         console.log(dataSource);


                    }





             }



 }

}









}, function(e) {

  throw e;


});










}





function getSortedList(oldname,newname){



    if(oldname.length < newname.length){


        return 1;

    }
    else{


        return 0;
    }



}








function sortNewDate(){



 var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
   var userArray=['name','password','website','hint','date'];



 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));
 var setdate = "";



 db.executeSql('SELECT * FROM user ').then (function(results) {

 userEncryptionKey = getSessionPassword();


 if(results.length){

      createTableHeader();





        for(var Item = 0 ; Item < results.length ; Item++) {


                   setDate = results[Item].date;

                    for(numberOfItem =  Item + 1 ; numberOfItem < results.length ; numberOfItem++) {






                    if( setDate => results[numberOfItem].date){

                            userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);
                          count = count + 1;
                             createTable(count,userData.name,userData.password,userData.website,userData.hint,userData.date);



                    }





             }



 }

}









}, function(e) {

  throw e;


});












}






function sortByDate(records){

    records = records.sort();


}


/*+++++++++++++++++++++++++++++++++ Setting  GForm++++++++++++++++++*/


function userSettingPage(){


    var setting  = document.getElementById("left");






}

function getDataNormalUser(){


    var userEnteredKey = sessionStorage.getItem('userKey');

    var items  = 0;
    var decryptedUserData = [];

      var placeHolder = ["Name","Mobile","Email","UserID"];

    var userName = sessionStorage.getItem('userinfo') ;


      loadRemoteStorageData();

reloadTable();
      //  document.getElementById('left').innerHTML = "";
        document.getElementById('right').innerHTML = "";




    var db = getUserInfoDatabaseObject();



    console.log( userName)




    db.executeSql('Select * from userinfo').then(function(records){



    for(items = 0 ;items < records.length ; items++){

        var userAdata = records[items].UserID;
        userAdata = JSON.parse(userAdata);
         userAdata =  userAdata.adata
       //userAdata = decryptData(userAdata,userEnteredKey);



            if((userAdata) === userName){

                console.log( userAdata +"  " + userName);
                console.log( "asdasd");
                 console.log( "key" +userEnteredKey);

                  decryptedUserData = getDecryptedUserInfo(records[items],userEnteredKey,placeHolder);


                     setRightDiv(decryptedUserData[0]);


        break;


            }





    }
    });


}





function setRightDiv(userName){

    console.log(userName)



    var items = 0;

    var setObj = document.getElementById('right');



    var imageIcon = ["images/setting.png","images/logout.png"];

     var settingButton = {};
    var logoutButton = {};
    var rightDiv ={};
    var settingLabel,logoutLabel;


     rightDiv  = document.createElement('div');
      rightDiv.class = 'rightdiv'


   setObj.appendChild(setUserInformation(userName,rightDiv));



}


function getDbObject(){



    return sessionStorage.getItem('dbObject');



}



function setUserInformation(userInfo,rightDiv){



  var userFiled = ["Name"]
    var items = 0;
    var userImg = {};
    var imageIcon = 'usericon';



    var leftDiv   =  document.createElement('select');







             leftDiv.id  = imageIcon ;

            leftDiv.width = "500px";
            leftDiv.heigth = "500px";


           rightDiv.id = "settingRight";






   leftDiv.onmouseover = function(){


         leftDiv.innerHTML = "";
         addDropDownList( leftDiv);



    }


     var label = createLabel(userInfo);
        label.id ="userrightname";
         label.style.whiteSpace = "nowrap";
          label.style.textAlign = "center";

     rightDiv.appendChild(label);

         rightDiv.appendChild(leftDiv);




    return rightDiv;


}


function  getDecryptedUserInfo(userInfo,userKey,infoIdArray){


    var userInformation = [];
    var items = 0;


     for(items = 0 ;items < infoIdArray.length; items++){


           userInformation[items] = decryptData(userInfo[infoIdArray[items]],userKey);



    }





    return userInformation;




}

function  getEncryptedUserInfo(userInfo,userKey,infoIdArray){


    var userInformation = [];
    var items = 0;


     for(items = 0 ;items < infoIdArray.length; items++){


           userInformation[items] = encryptData(userInfo[infoIdArray[items]],userKey);



    }





    return userInformation;




}













function  getEncryptedUserDataObject(userInfo,userKey,userArray){


    var userInformation = {};
    var items = 0;


     for(items = 0 ;items < userArray.length; items++){


           userInformation[userArray[items]] = encryptData(userInfo[userArray[items]],userKey);



    }





    return userInformation;




}




function createLabel(value,mLeft,mTop,fsize){


 var userlabel = document.createElement('Label');


        userlabel.width = "20px";
        userlabel.height = "20px";
        userlabel.innerHTML = value;
          userlabel.style.fontSize = fsize;
         userlabel.style.marginLeft = mLeft;
          userlabel.style.marginTop = mTop;
          userlabel.style.display= "block ";


    return  userlabel;




}


function createImageButton(imageIcon,width,height){


        var imgButton;



   imgButton =   document.createElement('input');

     imgButton.type = "button";
     imgButton.id = imageIcon;

    imgButton.style.width  =  width;
    imgButton.style.height = height;

    return  imgButton;

}



function editUserData(){
    console.log("asdasd")

         var items = 0;
         var userEnteredKey = getSessionPassword();

        var userName = sessionStorage.getItem('userinfo') ;

         var decryptedDa = [];

         var placeHolder = ["Name","Mobile","Email","UserID"];



     var textBoxImage = ['images/name.png','images/phone.png','images/email.png','images/name.png'];


    var db = getUserInfoDatabaseObject();

    db.executeSql('Select * from userinfo').then(function(records){


      for(items = 0 ;items < records.length ; items++){

        var userAData = records[items].UserID ;

        userAData = JSON.parse(userAData);

        userAData = userAData.adata;



            if( userName === userAData){




                        editUserInformation(records[items],userEnteredKey,placeHolder, textBoxImage);



                      break;


            }





    }

    });


}





function storeUserName(userName){


    sessionStorage.setItem("userinfo",userName);

}






function editUserInformation(previous,userKey,placeHolder,textBoxImage){


     var editPopUp,editDiv,editForm, editUserDate,save,cancel;
     var items;
    var userData ;
    var editedData = [] ;


    editDiv = document.getElementById("editdiv");
    editPopUp = document.getElementById("editwindow");

   save = createImageButton('save',"50px","40px");

   cancel = createImageButton('cancel',"50px","40px");

    document.getElementById('editwindow').style.display = "block";





   var userInfo = getDecryptedUserInfo(previous,userKey,placeHolder);
   console.log( userInfo);


    editDiv.appendChild(createLabel("Profile","150px","10px","15px"));

   // editDiv  = createIconButton( editDiv,'images/line2.png',"55px","20px");


      for(items = 0 ;items < placeHolder.length ; items++){

        editDiv  = createIconButton( editDiv,textBoxImage[items],"60px","85px");
      editDiv  = createTextBox( editDiv,placeHolder[items],userInfo[items]);

    }





      editDiv.style.height = "350px";
      editDiv.style.marginTop = "-100px";
     editPopUp.style.height = "700px";


    editDiv.appendChild(save);
     editDiv.appendChild(cancel);
    editPopUp.appendChild(editDiv);


     save.onclick = function(){



    userData = getData(placeHolder);





    editedData = encryptUserData(placeHolder,userData,userKey)
     editedData["key"] =  generateHashKey(userData[3]+userKey);

    editUserDeatils(previous,editedData,userKey,placeHolder,'userinfo');


            document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";

     }






    cancel.onclick = function(){


          document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";


    }










}



function createTextBox(windowObject,textId,placeHolder){


     var textBox = "";


textBox = document.createElement('input');

 textBox.setAttribute('type', 'text');



textBox.title = "Enter Your " + placeHolder;
textBox.name = textId;
textBox.id  = textId;


textBox.style.width ="230px";
textBox.style.height = "40px";


textBox.style.marginTop = "10px";
  textBox.style.display = 'inline-block';
textBox.value =  placeHolder ;



windowObject.appendChild(textBox);

    return windowObject;


}



function createPlaceHolder(textboxID,placeholder){



    document.getElementById(textboxID).placeholder = "Enter Your "+ placeholder + " Password  Here";





}

function createIconButton(windowObject,imageIcon,mLeft,mRight){


     var imageTextbox= new Image();
       imageTextbox.src = imageIcon;


    imageTextbox.type = "text";

    imageTextbox.style.width ="30px";
    imageTextbox.style.height = "20px";
    imageTextbox.style.marginLeft = mLeft;

     imageTextbox.style.display = 'inline-block';

    windowObject.appendChild(imageTextbox);

    return windowObject;


}





function editUserDeatils(previousData,editedData,userKey,userDataProperty,tableName){

 console.log("herher")
 var flag = null;
 var key = null;
var userAData ="";



    var db = getUserInfoDatabaseObject();




 db.keys(tableName).done(function (keys){

 db.values(tableName).done(function(results) {

      var resultLength = results.length;
      var items=0;

          flag = confirm("Do You Want To Edit ?");

     if(flag){

     for(items = 0; items < resultLength ; items++){

                key = keys[items];

         flag = validateUserInformation(previousData,results[items],userDataProperty, userKey);


                    if(flag){


                         db.put(tableName,editedData,key).done(function(x) {

                             });

                               userAData= JSON.parse(editedData.UserID)

                            storeUserName(userAData.adata);

                           getDataNormalUser();



                      break;

                }


      }



     }
     else{




       db.put(tableName,previousData,key).done(function(x) {


                });
                  userAData= JSON.parse(editedData.UserID)

                            storeUserName(userAData.adata);


                     getDataNormalUser();







      }






    });


 });


}



function validateUserInformation(previousData,newData,userDataProperty,userEncryptionKey){

    var flag = 0;
     var previousAdata,newAdata;


      previousAdata = JSON.parse(previousData.UserID);
       previousAdata = previousAdata.adata;

     newData = JSON.parse(newData.UserID);
      newData = newData.adata;

    console.log(previousData);

     console.log(newData);

    if(previousData){

            if( previousAdata ===  newData){


                        flag = 1;



            }
            else {



                flag = 0 ;

            }






    }

else{


    flag = 0;


}

    return flag;



}

function editPassword(){


      var passwordId = ["Old","New","Confirm"];

     var editPopUp,editDiv,editForm, editUserDate,save,cancel;
     var items;
    var userData ;
    var editedData = [] ;


    editDiv = document.getElementById("editdiv");
    editPopUp = document.getElementById("editwindow");

   save = createImageButton('save',"50px","40px");

   cancel = createImageButton('cancel',"50px","40px");

    document.getElementById('editwindow').style.display = "block";

 editDiv.appendChild(createLabel("Password","150px","15px","25px"));

     for(items = 0 ;items <  passwordId.length ; items++){


        editDiv.appendChild(createLabel(passwordId[items] +" :","100px","5px","15px"));
        editDiv  = createIconButton( editDiv,'images/password.png',"70px","100px");
      editDiv  = createTextBox( editDiv,passwordId[items],"");
      createPlaceHolder(passwordId[items],passwordId[items]);

    }




    save.onclick =  function(){



         userData =  getData(passwordId);

          var oldPassword = sessionStorage.getItem('userKey');

         var   fetchPassword = generateEncryptedKey(userData[0]);

         if(isTextBoxEmpty(userData, passwordId)){



         if(checkPassword(oldPassword,fetchPassword))
         {

             if(checkPassword(userData[1],userData[2])){


                 var newPassword = generateEncryptedKey(userData[1]);

                 sessionStorage.setItem('userKey',newPassword);

                 applyNewPasswordToUserInfo(newPassword,oldPassword);



                applyNewPasswordToUserData( newPassword,oldPassword);

            document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";


             }
             else{

                   alert("New And Confirm Password Do not Match");


             }




         }
         else{


             alert("Password Do not Match");

         }





         }
         else{



              promptAboutEmpty(passwordId);

         }


    }


      cancel.onclick =  function(){




          document.getElementById('editwindow').style.display = "none";
           document.getElementById('editdiv').innerHTML = "";




    }









     editDiv.style.height = "400px";
      editDiv.style.marginTop = "-100px";
     editPopUp.style.height = "700px";

    editDiv.appendChild(save);
     editDiv.appendChild(cancel);
    editPopUp.appendChild(editDiv);

}


function addDropDownList(select){




var value = ["Edit Profile","Change Password","LogOut"];

 var option

for(var items  = 0;  items < value.length ; items++ ){



   option = document.createElement('option');
     option.class = "dropdown-header";
    option.appendChild(document.createTextNode(value[items]));




 select.appendChild(option);


}


select.onclick = function(){


    callSelectedOption(this.value);


}

}



function callSelectedOption(choice){


    //alert(getDataBaseObject());


    if(choice == "Edit Profile" ){


       editUserData();



    }


    if(choice == "Change Password"){


          editPassword();



    }
     if(choice == "LogOut"){


         alert("Successfully Logged Out ");

             window.location.href ="../sampledb/index.html";




    }









}


 function encryptUserData(userProperty,userData,userKey){






     var items = 0;
   var userDataObject = {};





      for(items = 0; items < userProperty.length; items++){





                     userDataObject[userProperty[items]] = encryptData(userData[items],userKey);


    }






  return userDataObject;





 }



 function checkPassword(newPassword,oldPassword){



     if(oldPassword == newPassword){


         return true ;
     }
     else{


         return false

     }



 }



 function isTextBoxEmpty(userEnteredData,textBoxID){



    var items = 0, textboxObject = "",count = 0, flag = false ;

    var getTextBoxObj = {};



    for(items = 0 ; items < userEnteredData.length ; items++){


        getTextBoxObj = document.getElementById(textBoxID[items]);

        if(userEnteredData[items] === "" ) {


                count = count + 1;

                 getTextBoxObj.style.borderColor = "red";
                 getTextBoxObj.style.color= "red";
                 getTextBoxObj.value = "Cannot Be Empty";
                 getTextBoxObj.title = "Cannot Be Empty";
                 getTextBoxObj.focus();

       getTextBoxObj.onclick = function(){
                  $( function() {
      $( document ).tooltip({


      position: {

        my: "left top",
        at: "right+5 top-5",
        collision: "none",
        using: function( position, feedback ) {
          $( this ).css( position );

          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  } );
       }



        }



    }


 if(count > 0) {


     return false;

 }
else{


    return true ;

}





}


function clearTextBoxInput(textID){


     var items = 0, textboxObject = "",count = 0, flag = false ;

    var getTextBoxObj = {};

    getTextBoxObj = document.getElementsByName(textID);


    for(items = 0 ; items <getTextBoxObj.length ; items++){




        if(getTextBoxObj[items].value){

                    getTextBoxObj[items].focus();
                    getTextBoxObj[items].style.borderColor = "";
                    getTextBoxObj[items].style.color = "black";
                    getTextBoxObj[items].value = "";

        }



    }




}





function promptAboutEmpty(textboxID){


     var items = 0, textboxObject = "",count = 0, flag = false ;
    var count = 0;
    var getTextBoxObj = {};



    for(items = 0 ; items < textboxID.length ; items++){

        getTextBoxObj = document.getElementById(textboxID[items]);



        if(getTextBoxObj.value === "Cannot Be Empty" ){


                if(count >= items){
                    getTextBoxObj.focus();

                }

                    getTextBoxObj.style.borderColor = "red";

                    getTextBoxObj.style.color = "black";
                    getTextBoxObj.value = "";

        }
        else{

                    getTextBoxObj.style.borderColor = "lightblue";

                    getTextBoxObj.style.color = "black";

        }



    }




}


function applyNewPasswordToUserInfo(newPassword,oldPassword){




         var items = 0;
         var userEnteredKey = oldPassword;
         var placeHolder = []
        var userName = sessionStorage.getItem('userinfo') ;
      var userDataProperty=["Name","UserID","Email","Mobile"];

         var decryptedDa = [];

          var db = getUserInfoDatabaseObject();

    db.executeSql('Select * from userinfo').then(function(records){


      for(items = 0 ;items < records.length ; items++){





            if(decryptData(records[items].UserID,userEnteredKey) == decryptData(userName,userEnteredKey)){

                 decryptedDa =decryptUserAllData(records[items],userDataProperty,oldPassword );



                var editedData = encryptUserData(userDataProperty, decryptedDa,newPassword);




                    storeUserName(editedData.UserID);

                editUserDeatils(records[items],editedData,userEnteredKey,userDataProperty,'userinfo');



            }





    }

    });





}



function applyNewPasswordToUserData(newPassword,oldPassword){





      var userName = sessionStorage.getItem('databaseName') ;
      var items = 0;
      var  userTextBoxId = ["name","password","website","hint","date"];

      var decryptedUserData = {};
     var  encryptUserDataArr = []  ;
      var  encryptDataOfUser = {}  ;
      var newData = {};



       var db = getUserDatabaseObject(userName);



    db.executeSql('Select * from user').then(function(records){



    for(items = 0 ;items < records.length ; items++){



        console.log(records[items]);


        decryptedUserData = decryptDatabaseData(records[items],userTextBoxId,oldPassword);
         console.log(decryptedUserData)
       encryptUserDataArr = encryptedUserData(userTextBoxId,decryptedUserData,newPassword)

         encryptDataOfUser = getUserDataObject(encryptUserDataArr,userTextBoxId);


          storeUserData(records[items],encryptDataOfUser,oldPassword,'user')




    }
       getRecord();

    });





}

function storeUserData(previousData,editedData,userKey,tableName){


 var flag = null;
 var key = null;

 var userDataProperty=["name","password","website","hint","date"];

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));



 db.keys(tableName).done(function (keys){

 db.values(tableName).done(function(results) {

      var resultLength = results.length;
      var items=0;

          flag = confirm("Do You Want To Edit ?");

     if(flag){

     for(items = 0; items < resultLength ; items++){

                key = keys[items];


              flag = validateUserData(previousData,results[items],userKey,userDataProperty);

           console.log("flag");

                    if(flag){
                        console.log(flag);

                             db.put(tableName,editedData,key).done(function(x) {


                             });


                      break;

                }


      }



     }
     else{





                               db.put(tableName,previousData,key).done(function(x) {


                             });









      }






    });


 });


}




function getUnEncryptedData(){



    var numberOfItem = null;
  var userData = {};
  var flag = false;
  var userEncryptionKey = null;
  var count = 0;
  var countArray = [] ;
  var userName = [];
   var userArray=['name','password','website','hint','date'];
  document.getElementById('usertable').innerHTML="";

 var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

 db.executeSql('SELECT * FROM user ').then (function(results) {


 userEncryptionKey = getSessionPassword();


 if(results.length){

         console.log(results[numberOfItem]);
      createTableHeader();



        for(numberOfItem = 0 ; numberOfItem < results.length ; numberOfItem++) {



                  userData  = decryptAllData(results[numberOfItem],userEncryptionKey,userArray);

                    if(userData.name ){

                            count = count + 1;


                        createTable(count,userData.name,userData.password,userData.website,userData.hint,userData.date);


                    }





             }

            if(count == 0){

                 document.getElementById('usertable').innerHTML = "No Records Found ";



            }


 }

else{



                        //document.getElementById('usertable').visibility = "hidden ";
                        document.getElementById('usertable').innerHTML = "No Records Found ";






}









}, function(e) {

  throw e;


});













}


function simpleData(){

     var userName,userPassword,userWebsiteName,userHint,userKey,encryptUserId,encryptUserPassword,encryptUserWebsite,encryptUserHint;

  userName ="abhishek";
  userPassword = "asdasd";
  userWebsiteName="gmail";
  userHint="simple";


     var userDate = new Date(2016,01,04);
    var userData  = [userName,userPassword,userWebsiteName,userHint, userDate.getTime()];
    var userFiled = ["name","password","website","hint","date"]


   var userEncryptionKey = getSessionPassword();

    var db = getUserDatabaseObject(sessionStorage.getItem('databaseName'));

   var obj;


             obj = getUserDataObject(userData,userFiled);



              db.put('user',obj).done(function(x) {
                          alert("User Data Entered ");

                  });




}




function  validateSensitiveData(userid){


    switch (userid){

        case "name":

            return true;


        break;

        case "password":

            return true;


            break;

             case "userinfo":

            return true;


            break;



        default :
        return false;
        break;


    }





}




function createSensitiveEncryptedObject(userData,userArray,userKey){

    var encryptedObj ={};
    var encryptedData ="";
    var items =0;


     console.log(userData);

    for(items = 0 ; items <userArray.length; items++){

        if(validateSensitiveData(userArray[items])){

            encryptedObj[userArray[items]] = userData[userArray[items]];



        }


    }

       console.log(encryptedObj)
       encryptedObj = JSON.stringify(encryptedObj);
       console.log(  encryptedObj );

     encryptedData = encryptData(encryptedObj,userKey) ;
     console.log(encryptedData);

    return createEncryptedObject(encryptedData,userData,userArray);



}

function createEncryptedObject(encryptedData,userData,userArray){

    var  encryptedObj ={};

      for(var items = 0 ; items < userArray.length; items++){

        if(! validateSensitiveData(userArray[items])){

            encryptedObj[userArray[items]] = userData[userArray[items]];

            console.log("her")

        }


    }
      encryptedObj["userinfo"] = (encryptedData);

    console.log( encryptedObj)
    return    encryptedObj;
}





 function decryptUserData(userData,userArray,userKey){

  var encryptedObj ={};
    var encryptedData ={};
    var items =0;


     console.log(userData+""+userArray+""+userKey);

    for(items = 0 ; items <userArray.length; items++){

        if(validateSensitiveData(userArray[items])){

           encryptedData =  decryptToPlainData(userData[userArray[items]],userKey);

             encryptedObj = encryptedData;


           console.log(encryptedData);


        }
        else{


            encryptedObj[userArray[items]] = userData[userArray[items]];

        }



    }



   return    encryptedObj;
 }


 function getUserInfoData(userData,userArray){


     var userDecrytedData ={};

     for(var items = 0;items <userData.length ;items++  ){

         if(validateSensitiveData(userArray[items])){

           userDecrytedData[userArray[items]] = userData[userArray[items]];



         }



     }


     return   userDecrytedData;



 }



(function(){

  document.getElementById('add').onclick = addUserRecords ;
  document.getElementById('get').onclick = searchUserByDate;
  document.getElementById('getall').onclick = getRecord ;
  document.getElementById('setting').onclick = userSetting ;
  document.getElementById('clear').onclick = dbClear ;

})();
