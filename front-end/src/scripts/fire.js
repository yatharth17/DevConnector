import Config from '../config';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const fire = firebase.initializeApp(Config.FirebaseConfig)
const firestore = fire.firestore();

export { firebase, firestore }
export default fire;

