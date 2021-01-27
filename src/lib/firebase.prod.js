import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { config } from './config';
// import [seed json data] from [seed file];

// config data stored in seperate local file
// File name included in .gitignore

const firebase = Firebase.initializeApp(config);

// Database seeding
// Don't uncomment below after the first seed!
// seedDatabase([initialized Firebase App]);

export { firebase };
