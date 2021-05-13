 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDGwIJM0fttkNy9pM-D-Ieg_G4IvZxs-yY",
  authDomain: "unidad3firebase-25385.firebaseapp.com",
  projectId: "unidad3firebase-25385",
  storageBucket: "unidad3firebase-25385.appspot.com",
  messagingSenderId: "142898852655",
  appId: "1:142898852655:web:b98ec2a223f70fbc6c27da"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Declaro Variable para mi base de datos
  var basedatos = firebase.database();

  // Variable para comunuicarme con mi html
  var app = document.getElementById('app');

  // ejemplo de innerHTML app.innerHTML = '<p>Hola que hay</p>';

  // Consumir datos de Realtime
  
  /*var coleccion = firebase.database().ref().child('mensaje');
  coleccion.on('value', (snaphot) => {
      console.log(snaphot.val())
  });*/

  function readval(){
    var coleccion = basedatos.ref().child('users/username/');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
    });
  }
  
  function readget(){
      basedatos.ref('users').child('username').get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
      }
      else {
        console.log("No data available");
        app.innerText = 'No data available';
      }
    }).catch(function(error) {
      console.error(error);
    });
  }


  //Agregar colección a base de datos
  function writecollection() {
    basedatos.ref('users').set({
      username: "SaritaGP12",
      email: "palac5691@gmail.com",
    });
    console.log("Agregar datos");
  }
  
  