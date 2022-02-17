import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer OlmYbU7fihOqKdlO4rS7WWB6X6UIrX2uG_4n54bwZng52Kwn2-fnAt7fAc6sOldznMJMsv3234CEEbZrI897lEwfoa0sP8CyG00-oC4x2eCwIWK8pMKtBc_HhPnnYXYx'
    }
});