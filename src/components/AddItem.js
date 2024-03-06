import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class AddItemApi {
  static async addItem(newItem, type) {
    try {
      const endpoint = `/${type}`;
      const response = await axios.post(`${BASE_API_URL}${endpoint}`, newItem);

      console.log(`Added ${type}:`, response.data);

      return response.data; // Return the added item
    } catch (error) {
      console.error('Error adding item:', error);
      throw error; // Propagate the error for further handling if needed
    }
  }
}

export default AddItemApi;