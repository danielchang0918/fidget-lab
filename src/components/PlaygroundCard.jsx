function PlaygroundCard(props){
    return(
        <div className="playground-card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default PlaygroundCard;