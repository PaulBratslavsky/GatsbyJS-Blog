import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className="section bg-grey">
    <Title title="Services" />
    <div className="section-center services-center">
      { services.map(services => (
        <article key={services.id} className="service">
          {services.icon}
          <h4>{services.title}</h4>
          <div className="underline"></div>
          <p>{services.text}</p>
        </article>
      ))}
    </div>
  </section>
}

export default Services
