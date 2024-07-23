export function Card(props){
    return(
        <>
        <section>
            <div className="card">
            <img src={`images/${props.img}`} className="card--image" />
                <div className="card--stats">
                    <img src="images/star.png" className="card--star" alt="" />
                    <span>{props.ratings}</span>
                    <span>({props.reviewCount}). </span>
                    <span>{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> /Person</p>
            </div>
        </section>
        </>
    )
}