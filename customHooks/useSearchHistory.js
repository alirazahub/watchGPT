import AsyncStorage from "@react-native-async-storage/async-storage"

const storeSearchQuery = async (userId, query) => {
    try {
        const storageKey = `searchHistory:${userId}`;
        const searchHistory = await AsyncStorage.getItem(storageKey);
        let history = [];

        if (searchHistory !== null) {
            history = JSON.parse(searchHistory);
        }
        history.push(query);
        await AsyncStorage.setItem(storageKey, JSON.stringify(history));
    } catch (error) {
        console.log('Error storing search query:', error);
    }
};

const getSearchHistory = async (userId) => {
    try {
        const storageKey = `searchHistory:${userId}`;
        const searchHistory = await AsyncStorage.getItem(storageKey);

        if (searchHistory !== null) {
            return JSON.parse(searchHistory);
        }

        return [];
    } catch (error) {
        console.log('Error retrieving search history:', error);
        return [];
    }
};

export { storeSearchQuery, getSearchHistory };