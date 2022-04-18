import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
import { getFirestore, collection, updateDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';

const firebaseConfig = {
	apiKey: "AIzaSyCyOgIFLjXMzU31TDPq7zlQVVa3WQLZvHA",
	authDomain: "moveat-2582b.firebaseapp.com",
	databaseURL: "https://moveat-2582b.firebaseio.com",
	projectId: "moveat-2582b",
	storageBucket: "moveat-2582b.appspot.com",
	messagingSenderId: "916768390146",
	appId: "1:916768390146:web:68ca454b7a555b436abb1b",
	measurementId: "G-NCZJ580Q9Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const roomInfo = doc(db, "livecoach","test");

async function updateFirestore (ownerId, roomName, state) {
	await updateDoc( roomInfo, {
		ownerId: ownerId,
		roomName: roomName,
		state : state
	})
}

export {updateFirestore};