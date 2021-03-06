import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDq56MRJJqXqsM0Wh1aj6b3Fz-Pn3TSAVY',
    authDomain: 'crwn-wear.firebaseapp.com',
    databaseURL: 'https://crwn-wear.firebaseio.com',
    projectId: 'crwn-wear',
    storageBucket: 'crwn-wear.appspot.com',
    messagingSenderId: '397786050458',
    appId: '1:397786050458:web:4c47d463d853c8a27b9423',
    measurementId: 'G-W61N20KENJ'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
