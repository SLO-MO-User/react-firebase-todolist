import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBOOmLHHFAgvQTB4JYXCioKmvvYQs_Y5To',
  authDomain: 'todolist-react-app.firebaseapp.com',
  databaseURL: 'https://todolist-react-app.firebaseio.com',
  projectId: 'todolist-react-app',
  storageBucket: '',
  messagingSenderId: '1035729806602',
  appId: '1:1035729806602:web:1cf844a588f2b3b73046f3',
};

firebase.initializeApp(config);

export const getUserTodosRef = async userId => {
  const cartsRef = firestore.collection('todos').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const todosDocRef = firestore.collection('todos').doc();
    await todosDocRef.set({ userId, todos: [] });
    return todosDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

export const firestore = firebase.firestore();

export default firebase;
