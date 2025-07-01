// assets/js/guard.js

document.write(`
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"><\/script>
    <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"><\/script>
    <script>
      const firebaseConfig = {
        apiKey: "AIzaSyAaNDRralbB3_Ybbivz9E1QrOmk3VMlCN4",
        authDomain: "jlms-teaching-platform.firebaseapp.com",
        projectId: "jlms-teaching-platform",
        storageBucket: "jlms-teaching-platform.appspot.com",
        messagingSenderId: "193970336189",
        appId: "1:193970336189:web:17572a6b9176a984a5a2d4",
        measurementId: "G-DDG3NTYVQS"
      };
  
      firebase.initializeApp(firebaseConfig);
  
      firebase.auth().onAuthStateChanged(user => {
        if (!user) location.href = "/login.html";
      });
    <\/script>
  `);
  