
const UploadImage = ({ handleUpload, file, setFile, fileRef }) => {
    return (
        <div className="UploadImage">
            <input type="file" name='imageUploaded' ref={fileRef} onChange={(e) => setFile(e.target.files[0])}/>
            <button onClick={ handleUpload }>Upload</button>
        </div>
    )
}

export default UploadImage