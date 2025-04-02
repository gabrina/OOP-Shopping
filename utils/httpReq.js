const fetchData = async () => {
  try {
    const response = await fetch("data.json");
    const json = response.json();
    return json;
  } catch (error) {
    console.log("sth went wrong");
  }
};

export { fetchData };
