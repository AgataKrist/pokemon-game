import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
	apiKey: "AIzaSyCgdMKe-7YDU3QdrcW-o7tqGAQbyvr_oFk",
	authDomain: "pokemon-game-d88cf.firebaseapp.com",
	databaseURL: "https://pokemon-game-d88cf-default-rtdb.firebaseio.com",
	projectId: "pokemon-game-d88cf",
	storageBucket: "pokemon-game-d88cf.appspot.com",
	messagingSenderId: "278969876611",
	appId: "1:278969876611:web:8bed4b75c50216355c5bb6",
};

firebase.initializeApp(firebaseConfig);

class Firebase {
	constructor() {
		this.fire = firebase;
		this.database = this.fire.database();
	}
	getPokemonSocket = cb => {
		this.database.ref("pokemons").on("value", snapshot => {
			cb(snapshot.val());
		});
	};
	offPokemonSocket = () => {
		this.database.ref("pokemons").off();
	};
	getPokemonOnce = async () => {
		return await this.database
			.ref("pokemons")
			.once("value")
			.then(snapshot => snapshot.val());
	};
	postPokemon = (key, pokemon) => {
		this.database.ref(`pokemons/${key}`).set(pokemon);
	};
	addPokemon = data => {
		const newKey = this.database.ref().child("pokemons").push().key;
		this.database.ref("pokemons/" + newKey).set(data);
	};
	getNewPokemon = pokemon => {
		const newKey = this.database.ref().child("pokemons").push().key;
		this.database.ref("pokemons/" + newKey).set(pokemon);
	};
}

export default Firebase;
