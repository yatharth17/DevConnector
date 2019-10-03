var Configs = {
	Prod: {
		FirebaseConfig: {
			apiKey: "AIzaSyCTkKAT4YEs0-mnwS9PjMQ5Zhga10tf2lE",
			authDomain: "fir-fuctions.firebaseapp.com",
			databaseURL: "https://fir-fuctions.firebaseio.com",
			projectId: "fir-fuctions",
			storageBucket: "fir-fuctions.appspot.com",
			messagingSenderId: "862111464701",
			appId: "1:862111464701:web:b46e12608d03afd2"
		}

		
	},
	Dev: {
		FirebaseConfig: {
			apiKey: "AIzaSyCTkKAT4YEs0-mnwS9PjMQ5Zhga10tf2lE",
			authDomain: "fir-fuctions.firebaseapp.com",
			databaseURL: "https://fir-fuctions.firebaseio.com",
			projectId: "fir-fuctions",
			storageBucket: "fir-fuctions.appspot.com",
			messagingSenderId: "862111464701",
			appId: "1:862111464701:web:b46e12608d03afd2"
		}
	}
}

console.log(process.env.NODE_ENV);

var Config = null;
if (process.env.NODE_ENV === 'development') {
	Config = Configs.Dev
} else {
	Config = Configs.Prod
}
export default Config;


