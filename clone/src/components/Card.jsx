export function Card({data}){
    return(
        <>
            <div className="card">
            {data.openSpots===0 ? 
            <div className="card--badge--soldOut">SOLD OUT</div> 
            : 
            <div className="card--badge--available">Availble</div>}
            <img src={`images/${data.coverImg}`} className="card--image" />
                <div className="card--stats">
                    <img src="images/star.png" className="card--star" alt="" />
                    <span>{data.stats.rating}</span>
                    <span>({data.stats.reviewCount}). </span>
                    <span>{data.location}</span>
                </div>
                <p>{data.title}</p>
                <p><span className="bold">From ${data.price}</span> /Person</p>
            </div>
        </>
    )
}