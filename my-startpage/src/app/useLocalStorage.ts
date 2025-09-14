import { useState, useEffect } from "react";

export function useLocalStorageState<T>(initialState: T, key: string) {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialState;
	});

	// when the watch array changes the localstorage changes as well
	// synchronized
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
}
