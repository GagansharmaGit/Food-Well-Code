const Shimmer=()=>{
    return(
        <div className="restaurent-list">
            {
                Array(20).fill("Loading").map((e,index)=>(
                    <div className="shimmer-card" key={index}></div>
                ))
            }
        </div>
    );
}

export default Shimmer