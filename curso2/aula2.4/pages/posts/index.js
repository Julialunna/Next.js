// exemplo do lado do cliente
// a2.4/pages/posts/index.js
import { useRouter } from 'next/router';
import dados from '../../dados.json';

export const getServerSideProps= (context) => {
    
    const resultado=dados.posts.filter((post)=>{
        return post.date===context.query.date
    })
    return {
        props:{
            resultado,
        }
    }
}

export default function Posts(props) {
    console.log(props.resultado);
  return (
    <div>
        {props.resultado.map((post)=>(
            <>
            <h1>{post.id}</h1>
            <p>{post.date}</p>
            <p>{post.content}</p>
            </>
        ))}
    </div>
  );
}