import { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	signInWithEmailAndPassword
} from 'firebase/auth';

import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	// create a new user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// sign in user with google
	const loginWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	// login user with email and password
	const loginWithEmail = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	// logout user
	const logOutUser = () => {
		return signOut(auth);
	};

	// update user profile with name and photo while creating user
	const setNameAndPhoto = (name, photo) => {
		setLoading(true);
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo
		});
	};

	// observing the user state
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
			setUser(loggedInUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const authInfo = {
		loading,
		user,
		createUser,
		loginWithGoogle,
		setNameAndPhoto,
		loginWithEmail,
		logOutUser
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
