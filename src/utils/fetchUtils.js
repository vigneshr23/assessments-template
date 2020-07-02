
export const handleRequest = async request => {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const json = await response.json();
      return json;
    } else {
      const error = await response.json();
      return error;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
