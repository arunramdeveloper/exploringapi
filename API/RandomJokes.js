function getRnadomJokes() {
  // Fetch a random joke from the API
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => {
      // Check if the response is successful (status 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((joke) => {
      // Display the joke in the console
      console.log(`Here's a random joke: ${joke.setup}`);
      console.log(`Punchline: ${joke.punchline}`);
    })
    .catch((error) => {
      // Handle errors if the request fails
      console.error("There was a problem with the fetch operation:", error);
    });
}
