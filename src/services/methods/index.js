// GET POST PUT & DELETE

export const GET = ( token ) => {
    return {
        method: "GET",
        headers: {
            "Content-Type":"aplication/json",
            Authorization: `Bearer ${token}`,
        },
    };
};

export const POST = ( body, token ) => {
    return {
        method: "POST",
        headers: {
            "Content-Type":"aplication/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    };
};
