import axios from "axios";

const baseUrl = "http://localhost:3000";

const staticObject = {
  id: 1,
  title: "Johnny's Issue",
  description: "xqyYz@example.com",
};

export async function createData() {
  console.log("Create: ", staticObject);
  try {
    const createRes = await axios.post(`${baseUrl}/create`, {
      data: staticObject,
    });
    return JSON.stringify(createRes);
  } catch (error) {
    console.error(error);
  }
}

export async function readData() {
  console.log("Reading");
  try {
    const readRes = await axios.get(`${baseUrl}/read`);
    return JSON.stringify(readRes);
  } catch (error) {
    console.error(error);
  }
}

export async function updateData() {
  console.log("Updating");
  try {
    const updateRes = await axios.put(`${baseUrl}/update`, {
      data: staticObject,
    });
    return JSON.stringify(updateRes);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteData() {
  console.log("Deleting");
  const idToDelete = 1;
  try {
    const deleteRes = await axios.delete(`${baseUrl}/delete/${idToDelete}`);
    return JSON.stringify(deleteRes);
  } catch (error) {
    console.error(error);
  }
}
