import {useState} from 'react'
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import {Content} from './Post'

interface CommentProps {
    content: string;
    onDeleteComment: (commentToDelete: string) => void;

}
export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    };

    function handleLikeComment(){
        setLikeCount((c)=> c+1)
    };
    return (
    <div className={styles.comment}>
        <Avatar src='https://avatars.githubusercontent.com/u/52969396?v=4' hasBorder={false} alt='' />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Jordan Zanoni</strong>
                        <time title='04 de maio as 17:25h' dateTime='2023-05-04 17:25h'>Cerca de 1h atras</time>
                    </div>
                    <button onClick={handleDeleteComment} title='delete comment'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div> );
}