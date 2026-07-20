import img1 from './assets/carimg1.jpg'
import img2 from './assets/happyface3.png'
import img3 from './assets/carimg3.png'
import img4 from './assets/happyface4.png'
import img6 from './assets/carimg2.jpg'
import img7 from './assets/carimg4.avif'
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