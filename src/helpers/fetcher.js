export default function fetcher({path, method, body}) {
    return fetch( `/api${path}`, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });
}

//for the backend: /api/moods (path='/moods')