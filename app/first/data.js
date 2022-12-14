export const posts = [
  {
    id: 2,
    owner: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate quod veritatis culpa enim officia molestiae impedit explicabo vel maiores?',
    image: 'https://i.pravatar.cc/800',
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //user ID
  },
  {
    id: 3,
    owner: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate quod veritatis culpa enim officia molestiae impedit explicabo vel maiores?',
    image: 'https://i.pravatar.cc/800',
    likes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //user ID
  },
]

export const comments = [
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet.',
    post: 2,
    user: 3,
    responses: [3],
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet.',
    post: 2,
    user: 2,
    responses: [],
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet.',
    post: 3,
    user: 3,
    responses: [5, 6],
  },
  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet.',
    post: 3,
    user: 2,
    responses: [],
  },
  {
    id: 6,
    text: 'Lorem ipsum dolor sit amet.',
    post: 3,
    user: 4,
    responses: [],
  },
]

export const users = [
  {
    id: 3,
    userName: 'Antonio Resines',
    position: 'Desarrollador Front',
    image: 'https://i.pravatar.cc/800',
  },
  {
    id: 2,
    userName: 'Feijó',
    position: 'Customer Success',
    image: 'https://i.pravatar.cc/800',
  },
  {
    id: 4,
    userName: 'Abel Caballero',
    position: 'Amado lider',
    image: 'https://i.pravatar.cc/800',
  },
]
