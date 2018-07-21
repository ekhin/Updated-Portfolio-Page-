


    var config = {
        apiKey: "AIzaSyC-U0veMrTRx7m4ACfowxLg0G3xSV6eTDo",
        authDomain: "my-first-project-c1a72.firebaseapp.com",
        databaseURL: "https://my-first-project-c1a72.firebaseio.com",
        projectId: "my-first-project-c1a72",
        storageBucket: "my-first-project-c1a72.appspot.com",
        messagingSenderId: "358839980657"
      };
      firebase.initializeApp(config);
    
      var database = firebase.database();
        
        $( "#btn-submit").on("click",function (event) {
            event.preventDefault();
            var name = $("#name").val().trim();
            var email = $("#email").val().trim();
            var message = $("#message").val().trim();
            var userMessage = {
                name: name,
                email: email,
                message: message
            }
            database.ref().push(userMessage);
          });
        


   


