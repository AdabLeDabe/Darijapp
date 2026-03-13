import { useEffect, useState } from "react";

function readLocalStorage<T>(key: string, fallback: T): T {
    try {
        const v = localStorage.getItem(key);
        return v ? (JSON.parse(v) as T) : fallback;
    } catch {
        return fallback;
    }
}

function writeLocalStorage<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function useLocalStorageState<T>(key: string, initial: T) {
    const [state, setState] = useState<T>(() => readLocalStorage(key, initial));

    useEffect(() => {
        writeLocalStorage(key, state);
    }, [key, state]);

    return [state, setState] as const;
}