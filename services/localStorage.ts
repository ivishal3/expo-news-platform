import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const getLocalStorage = (key: string) => {
  try {
    const value = storage.getString(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    throw new Error(`Error retrieving data from local storage: ${error}`);
  }
};

export const setLocalStorage = (key: string, value: any) => {
  try {
    const string = JSON.stringify(value);
    storage.set(key, string);
    return true;
  } catch (error) {
    throw new Error(`Error saving data to local storage: ${error}`);
  }
};
export const removeLocalStorage = (key: string) => {
  try {
    storage.delete(key);
    return true;
  } catch (error) {
    throw new Error(`Error removing data from local storage: ${error}`);
  }
};

export const clearLocalStorage = () => {
  try {
    storage.clearAll();
  } catch (error) {
    throw new Error(`Error clearing local storage: ${error}`);
  }
};
