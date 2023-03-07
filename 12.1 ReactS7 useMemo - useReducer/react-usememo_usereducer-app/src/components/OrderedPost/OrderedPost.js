import React from "react"
import './OrderedPost.css'

const OrderedPost = (props) => {

    const [orderAscending, setOrderAscending] = React.useState(true);
    const [render, setRender] = React.useState(false);

    const postOrdered = React.useMemo(() => {


        console.log("Ordenamos posts");
    
        return props.posts
          .map(post => {
            return {
              ...post,
              date: new Date(post.date)
            }
          })
          .sort((a, b) => {
            if (orderAscending) {
              return a.date < b.date ? -1 : 1
            }
            return a.date > b.date ? -1 : 1;
          });
    
      }, [props.posts, orderAscending]);


    return (
        <div>
            {postOrdered.map((post) => {
                return <div key={post.title}>
                    <p>Titulo: {post.title}</p>
                    <p>Fecha: {post.date.toString()}</p>
                </div>
            })}
             <button onClick={() => setOrderAscending(!orderAscending)}>
        Cambiar orden {orderAscending ? 'Descendente' : 'Ascendente'}
      </button>

      <button onClick={() => setRender(!render)}>Cambiar estado (no provoca ordenación)</button>
        </div>
    )
}

export default OrderedPost