import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCcKXPInbdb5eZLXeX76Qfqi6v6fGQn-Z4",
    authDomain: "hcode-cafe-111.firebaseapp.com",
    projectId: "hcode-cafe-111",
    storageBucket: "hcode-cafe-111.appspot.com",
    messagingSenderId: "1096787596036",
    appId: "1:1096787596036:web:4809f8f276c7818aa07651"
};

if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig);

}

export default firebase;