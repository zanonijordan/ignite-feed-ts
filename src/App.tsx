import {useState} from 'react'
import {Header} from './components/Header'
import {Post, PostType} from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

const post: PostType[] = [
    {
        id: 1,
        author: {
            avatarURL: 'https://avatars.githubusercontent.com/u/52969396?v=4',
            name: 'Jordan Zanoni',
            role: 'Web developer',
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-05-10 20:00:00'),
    },
    {
        id: 2,
        author: {
            avatarURL: 'https://avatars.githubusercontent.com/u/52969396?v=4',
            name: 'Sandra Zanoni',
            role: 'Mannager',
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'},
        ],
        publishedAt: new Date('2022-05-10 20:00:00'),
    },
];

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {post.map( post => {
                        return (
                            <Post 
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>

            </div>

        </div>
    )
}

export default App
