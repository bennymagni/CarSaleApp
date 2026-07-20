
const DisplayData = ({ userData }) => {
    return (
        <div  style={{display:'flex', justifyContent: 'center', width: '70vw', flexWrap: 'wrap', aspectRatio: 16/9, marginTop: '10rem'}}>
            {/* {userData.map((data, index) => (
                <div className="ttt" key={index}>
                    <img src={data.binaryData} alt="" />
                    <p>{data.originalName}</p>
                    <p>{data.contentType}</p>
                </div>
                
            ))} */}
            {userData.map((card, index) => (
                <div key={index} className="loadedImage" style={{marginRight: '5rem', marginLeft: '5rem'}}>
                    <img 
                        src={`data:${card.mimetype};base64,${card.imageData}`} 
                        alt="User uploaded file" 
                        style={{width:'200px'}}
                        
                    />
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayData