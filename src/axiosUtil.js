import axios from "axios";

class axiosUtil {
  async getAllClients() {
    let clients = await axios.get("/clients");
    return clients.data;
  }

  async addClientToDB(newClient) {
    const response = await axios.post("/client", newClient);
    return response.data;
  }

  async updateClientInDB(update, clientID) {
    const response = await axios.put(`/client/${clientID}`, update);
    return response.data;
  }
}

const util = new axiosUtil();
export default util;

// export async function getAllClients() {
//   let clients = await axios.get("/clients");
//   return clients.data;
// }

// export async function addClientToDB(newClient) {
//   const response = await axios.post("/client", newClient);
//   return response.data;
// }

// export async function updateClientInDB(update, clientID) {
//   const response = await axios.put(`/client/${clientID}`, update);
//   return response.data;
// }
