import { Link } from 'react-router-dom'

export const blogArray = [
    {
        id: 1,
        image: '/images/blog-pic1.jpg',
        line: '',
        name: 'Because every man is different',
        phototext: 'PHOTOGRAPHY OF PEOPLE',
        buttonview: 'VIEW MORE',
        arrow: '>',
        category: <Link to="/people">Category: people </Link>,
    },
    {
        id: 2,
        image: '/images/blog-pic2.jpg',
        line: '',
        name: 'Beauty is everywhere around us',
        phototext: 'PHOTOGRAPHY OF NATURE',
        buttonview: 'VIEW MORE',
        arrow: '>',
        category: <Link to="/nature">Category: nature </Link>,
    },
    {
        id: 3,
        image: '/images/blog-pic3.jpg',
        line: '',
        name: 'The surprising world of wild animals',
        phototext: 'PHOTOGRAPHY OF ANIMALS',
        buttonview: 'VIEW MORE',
        arrow: '>',
        category: <Link to="/animals">Category: animals </Link>,
    },
]
