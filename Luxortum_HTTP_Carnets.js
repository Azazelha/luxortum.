const fetch = require("node-fetch");

// Function to fetch a random joke from the Official Joke API
async function fetchRandomJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke"; // API URL for random jokes
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch joke");
    const joke = await response.json();
    console.log(`Here's a random joke for you:`);
    console.log(`${joke.setup} - ${joke.punchline}`);
  } catch (error) {
    console.error("Error fetching joke:", error.message);
  }
}

// Execute the function to fetch a random joke
fetchRandomJoke();