import { createContext, useEffect, useState } from 'react';
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup
} from 'firebase/auth';

import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, provider);
	};

	const setNameAndPhoto = (name, photo) => {
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
		loginWithGoogle,
		createUser,
		setNameAndPhoto
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
