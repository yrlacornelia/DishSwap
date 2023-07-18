//localstorageutils

export const saveToLocalStorage = (key: string, data: any) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };
  
  export const loadFromLocalStorage = (key: string) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error loading from local storage:', error);
      return undefined;
    }
  };
  