import './_title.scss'

const Title = (props) => {
    return<section className="title">
        <h1 className="title__text">{props.title}</h1>
    </section>
}

export default Title