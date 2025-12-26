import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = {
  username: string;
  email: string;
  profileImage?: string;
};

const USER_KEY = '@user';
const SESSION_KEY = '@session';

export const saveUser = async (user: User) => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = async (): Promise<User | null> => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

export const setSession = async () => {
  await AsyncStorage.setItem(SESSION_KEY, 'true');
};

export const clearSession = async () => {
  await AsyncStorage.setItem(SESSION_KEY, 'false');
};

export const getSession = async () => {
  return (await AsyncStorage.getItem(SESSION_KEY)) === 'true';
};
