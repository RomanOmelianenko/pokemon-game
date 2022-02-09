import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBOa0QvtCzkvXZsjxubSMML97gFId8H7sA",
  authDomain: "pokemon-game-1ffd8.firebaseapp.com",
  databaseURL: "https://pokemon-game-1ffd8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game-1ffd8",
  storageBucket: "pokemon-game-1ffd8.appspot.com",
  messagingSenderId: "681582125262",
  appId: "1:681582125262:web:4cd69385ece8a6f3c0709f"
};

class Firebase {
  constructor() {
    // firebase.initializeApp(firebaseConfig); - выдавало в консоли ошибку errors.ts:91 Uncaught FirebaseError: Firebase: Firebase App named '[DEFAULT]' already exists (app/duplicate-app).

    // Через if else проблема решилась
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      
    } else {
      firebase.app();
    }

    this.fire = firebase;
    this.database = this.fire.database();
  };

  // Socet
  getPokemonSocet = (callback) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      callback(snapshot.val());
    });
  };

  // Получаем все покемонов один раз
  getPokemonsOnce = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot => 
      snapshot.val());
  };

  // Обновляем одного покемона
  postPokemons = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  // Добавляем покемона
  addPokemon = (data, callback) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(() => callback());
  };
};

export default Firebase;

