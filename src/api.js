
const fetchData = async (url, method = "GET", data) => {
const response = await fetch(`http://localhost:3001/shops/5ff9ab4b6aa5fa31a4f23783/${url}`, {
    method,
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});
return await response.json();}

export const generateSalt = async  (data) => await fetchData(`products/salt`, "POST", data)
export const getAllProducts = async  () => await fetchData(`products`)