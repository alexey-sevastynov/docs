import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorage<T>(initialValue: T, key: string): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            const storage = window.localStorage.getItem(key);
            if (storage) {
                return JSON.parse(storage);
            }
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
        }
        return initialValue;
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    }, [key, value]);

    return [value, setValue];
}
