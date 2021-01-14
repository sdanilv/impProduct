const fetchData = async (url, method = "GET", data) => {
  try {
    const response = await fetch(
      `https://imp-product-server.herokuapp.com/shops/5ff9ab4b6aa5fa31a4f23783/${url}`,
      {
        method,
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "max-age=31536000",
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  } catch (except) {
    console.log(except);
    return [];
  }
};

export const generateSalt = async (data) =>
  await fetchData(`products/salt`, "POST", data);
export const getAllProducts = async () => await fetchData(`products`);
