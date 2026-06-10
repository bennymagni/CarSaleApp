import img1 from './assets/IMG_9426.JPG.jpeg'
import img2 from './assets/IMG_9428.JPG.jpeg'
import img3 from './assets/IMG_9429.JPG.jpeg'
import img4 from './assets/IMG_9430.JPG.jpeg'
import img6 from './assets/IMG_9432.JPG.jpeg'
import img7 from './assets/IMG_9433.JPG.jpeg'
const HappyFaces = () => {

    const imgArray = [img1, img6, img2, img4, img7, img3]
    return (
        <section className="happyFaces">
            <h1>Get real <span>value </span>for your Car</h1>
            <div className="exampleImages">
                {imgArray.map((img, index) => (
                    <img key={index} src={img} alt="happy guy 1" width='316' height='210.5' className='images'/>
                ))}
            </div>
        </section>
    )
}

export default HappyFaces