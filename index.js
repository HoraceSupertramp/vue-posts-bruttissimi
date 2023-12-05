// const { createApp } = Vue;
const createApp = Vue.createApp;

const app = createApp({
    data() {
        return {
            posts: [
                {
                    id: 0,
                    isExpanded: false,
                    content: "Lorem ipsum sic amet",
                    avatar: "https://i.pravatar.cc/40?img=1",
                    date: "10/01/2023",
                    author: {
                        name: "Mario",
                        surname: "Rossi",
                    },
                    comments: [
                        {
                            id: 0,
                            content: "Lorem ipsum sic amet",
                            avatar: "https://i.pravatar.cc/40?img=1",
                            date: "10/01/2023",
                            author: {
                                name: "Mario",
                                surname: "Rossi",
                            },
                        },
                        {
                            id: 1,
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
                {
                    id: 1,
                    isExpanded: false,
                    content: "Lorem ipsum sic amet",
                    avatar: "https://i.pravatar.cc/40?img=1",
                    date: "10/01/2023",
                    author: {
                        name: "Mario",
                        surname: "Rossi",
                    },
                    comments: [
                        {
                            id: 2,
                            content: "Lorem ipsum sic amet",
                            avatar: "https://i.pravatar.cc/40?img=1",
                            date: "10/01/2023",
                            author: {
                                name: "Mario",
                                surname: "Rossi",
                            },
                        },
                        {
                            id: 3,
                            content: "Lorem ipsum sic amet",
                            avatar: "https://i.pravatar.cc/150?img=1",
                            date: "10/01/2023",
                            author: {
                                name: "Mario",
                                surname: "Rossi",
                            },
                        }
                    ],
                }
            ],
        };
    },
    methods: {
        onPostClick(post) {
            post.isExpanded = !post.isExpanded;
        }
    },
    mounted() {
        console.log(this.posts[this.posts.length - 1]);
    }
});

app.mount('#app');