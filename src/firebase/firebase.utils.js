import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDdkuySKHONtpQBP4gxa2QwbARGA8XP_fc",
  authDomain: "fab-clothing2.firebaseapp.com",
  projectId: "fab-clothing2",
  storageBucket: "fab-clothing2.appspot.com",
  messagingSenderId: "581722157854",
  appId: "1:581722157854:web:a1f9646286022e1883cf0f",
  measurementId: "G-0Z7C64X47M"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get()
  if(!snapShot.exists) {
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

export const addCollectionsAndDocuments =async (collectionKey, objectsToAdd) => {
    const collectionsRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionsRef.doc();
      batch.set(newDocRef, obj);  
    });

    return await batch.commit();  
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    } 
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, { })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;