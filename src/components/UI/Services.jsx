import React from 'react'
import '../../styles/services.css'

const serviceData = [
    {
        icon: 'ri-global-line',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
    {
        icon: 'ri-server-line',
        title: 'Web Hosting',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
    {
        icon: 'ri-line-chart-line',
        title: 'Data Analytics',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
    {
        icon: 'ri-robot-2-line',
        title: 'Generative AI',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
]

const Services = () => {
  return (
    <section id="services">
        <div className="container">
            <div className="services__top-content">
                <h2>Elevate Your Business With</h2>
                <h2 className='highlight'> Our Best Services</h2>
            </div>

            <div className="service__item-wrapper">
                {
                    serviceData.map((item,index)=>(
                        <div className="services__item" key={index}>
                            <span className="service__icon"><i class={item.icon}></i></span>
                            <h3 className="service__title">{item.title}</h3>
                            <p className="description">{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services
