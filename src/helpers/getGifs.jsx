


export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=20&q=${encodeURI(category) }&api_key=mhN3qWSo6zZXyuDHiJSA4odu4EmnFR3E`

    const res = await fetch(url);
    const {data} = await res.json();

    const gifs = data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.fixed_height_small.url
        }
    })
    
    return gifs;
}