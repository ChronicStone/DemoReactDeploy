const card = ({title, text, image}) => {
    return (
        <div className="card">
            <h3>Titre : {title}</h3>
            <p>Description : {text}</p>
            <img src={image} alt={title}/>
        </div>
    )
}

export default card