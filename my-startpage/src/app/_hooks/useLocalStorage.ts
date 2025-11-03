import { useState, useEffect } from "react";

export function useLocalStorageState<T>(initialState: T, key: string) {
	const [value, setValue] = useState<T>(initialState);

	useEffect(() => {
		// Read from localStorage only in client
		const storedValue = localStorage.getItem(key);
		if (storedValue) {
			setValue(JSON.parse(storedValue));
		}
	}, [key]);

	useEffect(() => {
		// Write to localStorage only in client
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue] as const;
}
