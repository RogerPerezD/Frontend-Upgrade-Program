
type GifFetch = {
    id: string,
    images: {
        downsized_medium: {
            url: string
        }
    },
    title: string
}

export type Gif = [{
    id: string,
    title: string,
    url: string
  }];

export const getGifs = async ( category: string ): Promise<Gif> => {
    const url: string = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=rFJBsjNSFROaXWbpH1DErdD4vDjOKNcc`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs: Gif = data.map( (img: GifFetch) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });

    return gifs;
};