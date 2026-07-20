
const DisplayDataMain = ({ carData }) => {

    
    return (
        <div>
            {(carData.length === 0) ? 
            <div style={{margin:'10rem', textAlign:"center"}}>
                <p>No Data in Database</p>
            </div>
            :(<div style={{marginTop:'100px', marginBottom:'100px', display:'flex', justifyContent:'center', gap:'5rem', flexWrap: 'wrap', height:"auto"}}>
                {carData.map((card, index) => (
                    <div key={index} style={{height:'auto'}}>
                        <div>
                            <img 
                            src={`data:${card.mimetype};base64,${card.image}`} 
                            alt="User uploaded file" 
                            style={{width:'200px'}}    
                        />
                        </div>
                        <div>
                            <p>Full Name : {card.fullName}</p>
                            <p>Contact : {card.phoneNumber}</p>
                            <p>Car Brand : {card.carBrand}</p>
                            <p>Car Model : {card.model}</p>
                            <p>Year Of Manufacture : {card.manufactureYear}</p>
                            <p>Status : {card.status} </p>
                            <p>UserID : {card.userID}</p>
                           {/*  <p>Mileage : {card.mileage}</p>
                            <p>Year Of Registration : {card.registrationYear}</p>
                            <p>Engine Capacity : {card.engineCapacity}</p>
                            <p>Hidden Faults : {card.hiddenFaults}</p>
                            <p>Description : {card.faultDescription}</p> */}
                        </div>
                    </div>
                ))}
            </div>)}
        </div>
        
    )
}

export default DisplayDataMain