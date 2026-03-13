export type StateObject<T> = {
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
};