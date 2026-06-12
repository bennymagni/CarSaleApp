
const CheckCarEligibility = ({ carBrand, setCarBrand, manufactureYear, setManufactureYear, 
    mileage, setMileage, submitData, model, setModel, registrationYear, setRegistrationYear,
    engineCapacity, setEngineCapacity, hiddenFaults, setHiddenFaults, faultDescription, setFaultDescription }) => {

    return (
        <div className="formWrapper">
            <form method="post" className="form" id="userDataForm" onSubmit={submitData}>
                <fieldset className="fieldset">
                    <legend>Vehicle Information</legend>
                    <div className="carBrandWrapper">
                        <label htmlFor="carBrand" className="carBrandLabel">Car Brand</label>
                        <input type="text" name="carBrand" id="carBrand" placeholder="e.g Toyota" value={carBrand} required onChange={(e) => setCarBrand(e.target.value)}></input>
                    </div>
                    <div className="modelWrapper">
                        <label htmlFor="model" className="modelLabel">Model</label>
                        <input type="text" name="model" value={model} id="model" placeholder="e.g Camry"  onChange={(e) => setModel(e.target.value)}></input> 
                    </div>
                    <div className="yearOfManufactureWrapper">
                        <label htmlFor="yearOfManufacture" className="yomLabel">Year of Manufacture</label>
                        <input type="text" name="yearOfManufacture" value={manufactureYear} id="yearOfManufacture" placeholder="e.g 2009"  onChange={(e) => setManufactureYear(e.target.value)}></input>
                    </div>
                    <div className="registrationYearWrapper">
                        <label htmlFor="registrationYear" className="registrationYearLabel">Registration Year</label>
                        <input type="text" name="registrationYear" value={registrationYear} id="registrationYear" placeholder="e.g 2024" onChange={(e) => setRegistrationYear(e.target.value)}></input> 
                    </div>
                    <div className="mileageWrapper">
                        <label htmlFor="mileage" className="mileageLabel">Mileage</label>
                        <input type="text" name="mileage" value={mileage} id="mileage" placeholder="e.g 50000"  onChange={(e) => setMileage(e.target.value)}></input> 
                    </div>
                    <div className="engineCapacityWrapper">
                        <label htmlFor="engineCapacity" className="engineCapacityLabel">Engine Capacity</label>
                        <input type="text" name="engineCapacity" value={engineCapacity} id="engineCapacity" placeholder="e.g 1.5"  onChange={(e) => setEngineCapacity(e.target.value)}></input> 
                    </div>
                    <div className="hiddenFaultsWrapper">
                        <label htmlFor="hiddenFaults" className="hiddenFaultsLabel">Hidden Faults</label>
                        <input type="radio" name="hiddenFaults" value='Yes' checked={hiddenFaults === 'Yes'} id="hiddenFaults" onChange={e => setHiddenFaults(e.target.value)}/>Yes
                        <input type="radio" name="hiddenFaults" value='No' checked={hiddenFaults === 'No'} id="hiddenFaults" onChange={e => setHiddenFaults(e.target.value)}/>No
                    </div>
                    <div className="faultDescriptionWrapper">
                        <label htmlFor="faultDescription" className="faultDescriptionLabel">If yes, briefly describe fault</label>
                        <input type="text" name="faultDescription" value={faultDescription} id="faultDescription" onChange={(e) => setFaultDescription(e.target.value)}></input> 
                    </div>
                </fieldset>
            </form>
            <button type="submit" className="cceButton" form="userDataForm">Submit</button>
        </div>
    )
}

export default CheckCarEligibility