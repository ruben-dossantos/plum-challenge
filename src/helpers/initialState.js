const initialState = {
    labels: {
        topBar: {
            homes: 'Homes',
            hosts: 'Hosts',
            help: 'Need help?',
            login: 'Login',
        },
        searchHeader: {
            dateRange: 'From/To',
            for: 'For',
            guests: 'guests',
            price: '€ Per night',
            total: '€ Total for {0} nights',
            instantBook: 'Instant Booking',
        },
        content: {
            people: 'people',
            bedrooms: 'bedrooms',
            bathrooms: 'bathrooms',
            previous: 'previous image',
            next: 'next image',
        },
    },
    searchHeader: {
        dateMin: '2020-01-03T00:00:00.000Z',
        dateMax: '2020-02-28T00:00:00.000Z',
        guests: 2,
        price: 345,
    },
    content: {
        title: 'Monsieur Didot',
        properties: {
            maxPeople: 4,
            bedrooms: 2,
            bathrooms: 2,
            tags: ['Private terrasse', 'Peaceful', 'Good transportation near'],
        },
        location: 'Notthing Hill',
        city: 'London',
        transportation: {
            type: 'Walk',
            duration: '6 mins',
            destination: 'Westbourne Park Station',
        },
        others: [{ id: 7, name: 'Stairs' }],
    },
};


export default initialState;
