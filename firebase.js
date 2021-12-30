

const firebaseConfig = {
	apiKey: 'AIzaSyB2V81k1E-kGdHnLDE71flFyjMsLX-5gEQ',
	authDomain: 'funtodolist-13d47.firebaseapp.com',
	projectId: 'funtodolist-13d47',
	storageBucket: 'funtodolist-13d47.appspot.com',
	messagingSenderId: '959678752752',
	appId: '1:959678752752:web:9d9e399c69203509d79f35',
	measurementId: 'G-09N9WM7LSW',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();