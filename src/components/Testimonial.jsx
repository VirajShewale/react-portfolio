import React from 'react'
import def from "../assets/default.jpg"

const Testimonial = () => {
  return (
    <div id='testimonial'>

        <h2>Testimonial</h2>
        <section>

            <TestimonialCard name={"Viraj"} feedback={"Get Into Web Development" }/>
            <TestimonialCard name={"Rahul"} feedback={"This is a Good Portfolio" }/>
            <TestimonialCard name={"Sundar"} feedback={"Your skills are good" }/>
        </section>
    </div>
  )
};

const TestimonialCard = ({name, feedback}) => (
    <article>
        <img src={def} alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial