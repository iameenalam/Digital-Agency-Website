import React from 'react'
import '../../styles/services.css'

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
    {
        icon: 'ri-global-line',
        title: 'Web Development',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
    {
        icon: 'ri-line-chart-line',
        title: 'Data Analytics',
        desc: 'Lorem ipsum dolor sit amet elit. Illo repellat intore impedit autem quae fugiat pront facilis que!'
    },
]

const Services = () => {
  return (
    <section id="services">
        <div className="container">
            <div className="services__top-content">
                <h6 className='subtitle'>Our Services</h6>
                <h2>Elevate your business with</h2>
                <h2 className='highlight'> our best services</h2>
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
