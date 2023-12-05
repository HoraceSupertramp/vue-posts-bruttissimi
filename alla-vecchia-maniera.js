const posts = [
    {
        content: "Lorem ipsum sic amet",
        avatar: "https://i.pravatar.cc/150?img=1",
        date: "10/01/2023",
        author: {
            name: "Mario",
            surname: "Rossi",
        },
        comments: [
            {
                content: "Lorem ipsum sic amet",
                avatar: "https://i.pravatar.cc/150?img=1",
                date: "10/01/2023",
                author: {
                    name: "Luigi",
                    surname: "Bianchi",
                },
            },
            {
                content: "Lorem ipsum sic amet",
                avatar: "https://i.pravatar.cc/150?img=1",
                date: "10/01/2023",
                author: {
                    name: "Mario",
                    surname: "Rossi",
                },
            }
        ],
    },
];

const test = 10;
const container = document.querySelector('#container');
container.innerHTML = test;
test++;
container.innerHTML = test;

container.addEventListener('click', function() {
    // codice che reagisce all'evento click
});

console.log(posts[0].author.surname);

for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    container.innerHTML += `
        <div>${element.author}</div>
    `
}