import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine }  from 'phosphor-react'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' />

            <div className={styles.profile}>
                <Avatar src='https://avatars.githubusercontent.com/u/52969396?v=4' />
                <strong>Jordan Zanoni</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                <PencilLine size={20} />
                    Edit your profile
                </a>
            </footer>
        </aside>
    );
}