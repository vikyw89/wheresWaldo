import { useSyncExternalStore } from "react";

const subscribers = {};

export const useSyncLocalStorage = (saveDirectory='global') => {
    if (!subscribers[saveDirectory]) {
        subscribers[saveDirectory] = [];
    }

    const subscribe = (callback) => {
        subscribers[saveDirectory] = [...subscribers[saveDirectory], callback];
        return () => {
            subscribers[saveDirectory] = subscribers[saveDirectory].filter(
                (el) => el !== callback
            );
        };
    };

    const getSnapshot = () => {
        return localStorage[saveDirectory];
    };

    const getServerSnapshot = () => {
        return true;
    };

    const emitChange = () => {
        for (let subscriber of subscribers[saveDirectory]) {
            subscriber();
        }
    };

    const setState = (arg) => {
        localStorage[saveDirectory] = JSON.stringify(arg);
        emitChange();
        console.log(subscribers)
    };

    const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return [state ? JSON.parse(state) : undefined, setState];
};
