
const CheckCarEligibility = ({ carBrand, setCarBrand, manufactureYear, setManufactureYear, mileage, setMileage, submitData }) => {

    return (
        <div className="formWrapper">
            <form method="post" className="form" id="userDataForm" onSubmit={submitData}>
                <fieldset className="fieldset">
                    <legend>Vehicle Information</legend>
                    <label htmlFor="carBrand">Car Brand</label>
                    <input type="text" name="carBrand" id="carBrand" value={carBrand} required onChange={(e) => setCarBrand(e.target.value)}></input><br />
                    <label htmlFor="yearOfManufacture">Year of Manufacture</label>
                    <input type="text" name="yearOfManufacture" value={manufactureYear} id="yearOfManufacture" required onChange={(e) => setManufactureYear(e.target.value)}></input><br />
                    <label htmlFor="mileage">Mileage</label>
                    <input type="text" name="mileage" value={mileage} id="mileage" required onChange={(e) => setMileage(e.target.value)}></input> <br />
                </fieldset>
            </form>
            <button type="submit" className="cceButton" form="userDataForm">Submit</button>
        </div>
    )
}

export default CheckCarEligibility