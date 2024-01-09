export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=eu2E9uEQxUrRvAxHdr8TVsK22WE2CzKc&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
