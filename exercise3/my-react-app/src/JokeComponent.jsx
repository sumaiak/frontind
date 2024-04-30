import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');

    // useEffect to fetch the joke
    const fetchJoke =() => {fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => setJoke(data.value))
    .catch(error => console.error('Error fetching joke:', error));}
    useEffect(() => {

        fetchJoke();
         setInterval(fetchJoke, 1000)//set interval for updating the joke every ten

        return () => clearInterval(interval)
    }, []); 

    // Render the joke
    return (
        <div>
            <p>{joke}</p>
            <button onClick={fetchJoke}>Fetch New Joke</button>

        </div>
    )
}

export default JokeComponent;
