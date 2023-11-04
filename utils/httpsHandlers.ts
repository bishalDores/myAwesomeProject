export const postRequest = async (url: string, data: {}) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};
