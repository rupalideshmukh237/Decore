import React, { useEffect, useRef } from 'react'
import './Page3.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Page4 from './Page4'

gsap.registerPlugin(ScrollTrigger)

const Page3 = () => {
  const links = [
    "Living Room",
    "Bedrooms",
    "Pooja Room",
    "Dining Room",
    "Kitchen",
    "Entrance",
    "Study room"
  ]

  const listRef = useRef([])
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      listRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%",
         //  markers:true,
          end: "top 30%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <div className="page3_container" ref={sectionRef}>
      <div className="page3_left">
        <img
          src="https://decor24.in/wp-content/uploads/2025/05/DSC_03222-1024x684.webp"
          alt=""
        />
      </div>

      <div className="page3_right">
        <ul>
          {links.map((item, index) => (
            <li
              key={index}
              ref={(el) => (listRef.current[index] = el)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  )
}

export default Page3