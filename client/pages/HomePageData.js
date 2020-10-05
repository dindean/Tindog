const owners = [
  {
    firstName: 'Kyle',
    id: 'm0',
    age: 33,
    gender: 'male',
    email: 'asdf@gmail.com',
    password: 'test123',
    dog: 'corgi',
    imageUrl: 'https://www.codesmith.io/dd9f787a9b2c2ac3fe41598e33bf8218.jpg',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
  {
    firstName: 'Victoria',
    id: 'f1',
    age: 30,
    gender: 'female',
    email: 'asdf@gmail.com',
    password: 'test123',
    dog: 'Golden Retriever',
    imageUrl: 'https://www.codesmith.io/121ba6526d3d77425c3a4307922474bf.jpg',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
  {
    firstName: 'Sara',
    id: 'f2',
    age: 28,
    gender: 'female',
    email: 'asdf@gmail.com',
    password: 'test123',
    dog: 'Shiba',
    imageUrl: 'https://www.codesmith.io/5b7c6ff891bdcaab69d244b54c9f3c26.jpg',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
  {
    firstName: 'Phil',
    id: 'm2',
    age: 30,
    gender: 'male',
    email: 'asdf@gmail.com',
    password: 'test123',
    dog: 'French Bulldog',
    imageUrl: 'https://www.codesmith.io/050e05f4710f989bebd5507bef701841.jpg',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
];

const trips = [
  {
    title: 'To The Mountain',
    imageUrl: 'https://www.urbanpethospital.com/blog/image.axd?picture=/hiking-with-dog.jpg',
    tripId: '1',
    price: '99',
    detailsUrl: '/trips/1',
    destination: 'Catskill Falls',
    dogs: [],
    owners: [],
    date: '09/14/20',
    schedule: ['8AM Depart from Midtown', '10AM Start Hiking', '12PM Picnic', '2PM Codesmith Farm', '4PM Amish Museum', '6PM Back to NYC'],
  },
  {
    title: 'To The Beach',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0995/5684/files/Image-1_large.jpg?v=1490124277',
    tripId: '2',
    detailsUrl: '/trips/2',
    price: '99',
    destination: 'Sandyhook Beach',
    dogs: [],
    owners: [],
    date: '08/28/20',
    schedule: ['8AM Depart from Midtown', '10AM Start Hiking', '12PM Picnic', '2PM Sandyhook Beach', '4PM Amish Museum', '6PM Back to NYC'],
  },
  {
    title: 'Pick Some Apples',
    imageUrl: 'https://107fclzizww4ftn03ydjxa1a-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/apples.jpg',
    tripId: '3',
    detailsUrl: '/trips/3',
    price: '99',
    destination: 'Codesmith Farm',
    dogs: [],
    owners: [],
    date: '08/15/20',
    schedule: ['8AM Depart from Midtown', '10AM Start Hiking', '12PM Picnic', '2PM Codesmith Farm', '4PM Amish Museum', '6PM Back to NYC'],
  },
  {
    title: 'Leaf peep',
    imageUrl: 'https://theknow.denverpost.com/wp-content/uploads/2018/09/Changing-fall-colors-_HHR6121.jpg',
    tripId: '4',
    detailsUrl: '/trips/4',
    price: '99',
    destination: 'Vermont Park',
    dogs: [],
    owners: [],
    date: '09/22/20-09/24/20',
    schedule: ['8AM Depart from Midtown', '10AM Start Hiking', '12PM Picnic', '2PM Codesmith Farm', '4PM Amish Museum', '6PM Back to NYC'],
  },
];

const dogsList = [
  {
    petName: 'Java',
    id: 'm00',
    age: 3,
    gender: 'male',
    breed: 'corgi',
    imageUrl: 'https://assets.blog.slice.ca/imageserve/wp-content/uploads/2019/01/10142947/cute-dog-names-ideas-cardi/x.jpg',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
  {
    petName: 'Ruby',
    id: 'f10',
    age: 3,
    gender: 'female',
    breed: 'Golden Retriever',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-dog-quotes-1580508958.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
  {
    petName: 'Python',
    id: 'f20',
    age: 2,
    gender: 'female',
    breed: 'Shiba',
    imageUrl: 'https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
  {
    petName: 'Bear',
    id: 'm20',
    age: 3,
    gender: 'male',
    breed: 'French Bulldog',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS97WzuAFFvKpXucpDQ1iDNOGl_AGV-BKs8NQ&usqp=CAU',
    intro: 'Hello! My name is Anna and I love my corgi a lot. I love reading and outdoor activities. Let\'s chat!',
  },
];

export { owners, trips, dogsList };
