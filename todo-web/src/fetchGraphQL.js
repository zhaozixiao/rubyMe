async function fetchGraphQL(text, variables) {
    // fetch data from the rails server
    const response  = await fetch('http://localhost:3001/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    return await response.json();
}

export default fetchGraphQL;