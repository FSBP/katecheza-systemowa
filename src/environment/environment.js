export const environment = {
    appTag: 'KatechezaSystemowa',
    apiUrl: process.env.NODE_ENV === 'production' ? 'http://api.katecheza-systemowa.pl/api' : 'http://localhost:3000/api',
    pixabayApiKey: '14302379-9979daac6c3305272359bbec7',
    pixabayApiUrl: `https://pixabay.com/api?key=14302379-9979daac6c3305272359bbec7&&`,
    cloudImageUrl: 'https://i.imgur.com/',
    defaultImgUrl: 'SJkPnvk.jpg'
};
