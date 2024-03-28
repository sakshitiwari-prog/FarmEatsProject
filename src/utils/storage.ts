import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a function to save data
const saveDataToStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved successfully!');
    return {msg: 'Data saved successfully!'};
  } catch (error) {
    console.error('Error saving data:', error);
    return error;
  }
};
const getDataFromStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // Data found, do something with it
      console.log('Data retrieved successfully');
      return value; // Return the retrieved data
    } else {
      // Data not found for the given key
      console.log('No data found for key:', key);
      return null; // Return null indicating no data found
    }
  } catch (error) {
    // Error retrieving data
    console.error('Error retrieving data:', error);
    return null; // Return null indicating error
  }
};
const removeDataFromStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully for key:', key);
    return 'Data removed successfully';
  } catch (error) {
    console.error('Error removing data:', error);
    return error;
  }
};
export {saveDataToStorage, getDataFromStorage, removeDataFromStorage};
// Call the function to save data
// saveDataToStorage('username', 'JohnDoe');
