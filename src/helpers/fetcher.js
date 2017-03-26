export default function fetcher({ path, method, body, token }) {
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    
    if( token ) {
        headers['Authorization'] = token;
    }

    return fetch( `/api${path}`, {
        method: method,
        headers,
        body: JSON.stringify(body),
    });
}

//for the backend: /api/moods (path='/moods')