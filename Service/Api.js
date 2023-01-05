async function PostData(endPoint, data){
    // var options = {
    //     method: 'POST',
    //     url: `${process.env.BASE_URL}+${endPoint}`,
    //     headers: {
    //         Accept: '*/*',
    //         'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    //         'Content-Type': 'application/json'
    //     },
    //     data: data,
    // };
    try {
        const response = fetch('http://localhost:8000/api/login')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json.movies;
        })
    } catch (error) {
        console.error(error);
    };
}