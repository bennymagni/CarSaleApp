import img1 from './assets/firstGuy.jpg' 
import img2 from './assets/secondGuy.jpg'
import img3 from './assets/ThirdGuy.jpg'

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <h1>Testimonials</h1>
            <section className='testimonycontainer'>
                <section className='testimony'>
                    <img src={img1} alt="" className='testimonialImage' style={{width:'8.4375rem', height:'5.625rem'}}/>
                    <p>I had been trying to sell my car for three months but I couldn't find
                    buyers till I came across this company. After i confirmed eligibility,
                    I brought it down, it was inspected and I was paid immediately, they paid
                    alot higher than market value. I couldn't believe it!</p>
                </section>
                <section className='testimony testimony2'>
                    <img src={img2} alt="" className='testimonialImage' style={{width:'8.4375rem', height:'5.625rem'}}/>
                    <p>I was relocating abroad and was in need of all the money I could get,
                       a friend referred me to this company, I took the eligibility test
                       and passed. I brought the car to the office and was paid. I was so happy!
                    </p>
                </section>
                <section className='testimony testimony3'>
                    <img src={img3} alt="" className='testimonialImage' style={{width:'8.4375rem', height:'5.625rem'}}/>
                    <p>I recently bought a new car and so I had no need for my old car,
                        I was wondering what to do with the old car then i came across this company.
                        I brought the car in, they confirmed the info i provided and I was paid. It was the best day of my life!
                    </p>
                </section>
            </section>
        </div>
    )
}

export default Testimonials