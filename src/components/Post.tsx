import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import {ChangeEvent, FormEvent, InvalidEvent, useState} from 'react'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface Author {
    name: string;
    role: string;
    avatarURL: string;
}
 export interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}
interface PostProps {
    post: PostType;
}


export const Post = ({ post }: PostProps) =>{
    const [comments, setComment] = useState(['Muito bom Devon, parabéns!! 👏👏'])
    const [newCommentTxt, setNewCommentTxt] = useState('')
    
    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      });
    const publishDateRelativeToNow = formatDistanceToNow(post.publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComment([...comments, newCommentTxt]);
        setNewCommentTxt('')

    };

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentTxt(event.target.value);
        
    };

    function handleNewCommentIvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatorio');
    };

    function deleteComment(commentToDelete: string){
        const commentWithouDeletedOne = comments.filter(comment =>{
            return comment != commentToDelete;
        })
        setComment(commentWithouDeletedOne);
    };

    const isNewCommentEmpity = newCommentTxt.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={post.author.avatarURL} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {post.content.map(line => {
                    
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href=''>{line.content}</a></p>
                    }
                    
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu comentario</strong>
                <textarea 
                    name='comment' 
                    value={newCommentTxt} 
                    onChange={handleNewCommentChange} 
                    placeholder='Deixe um comentario'
                    onInvalid={handleNewCommentIvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpity}>
                    Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                        )
                    })
                }
            </div>
        </article>
    )

}