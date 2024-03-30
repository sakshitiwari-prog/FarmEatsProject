import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a function to save data
const saveDataToStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    return error;
  }
};
const getDataFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Data found, do something with it
      return value; // Return the retrieved data
    } else {
      // Data not found for the given key
      return null; // Return null indicating no data found
    }
  } catch (error) {
    // Error retrieving data
    return null; // Return null indicating error
  }
};
const removeDataFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return 'Data removed successfully';
  } catch (error) {
    return error;
  }
};
export {saveDataToStorage, getDataFromStorage, removeDataFromStorage};
// Call the function to save data
// saveDataToStorage('username', 'JohnDoe');
