import React, { useEffect, useRef } from 'react'
import './Page2.css'
import Page3 from './Page3'
import Page4 from './Page4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lines = [
  "At Decor24, we believe every space has a story to tell.",
  "With our expertise in interior design, we transform",
  "residential spaces into elegant, functional environments.",
  "Through creativity, attention to detail, and a client-centric approach,",
  "we craft interiors that reflect your unique style",
  "and enhance everyday living."
]

const Page2 = () => {
  const headingRef = useRef(null)
  const linesRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      linesRef.current,
      {
        color: "#888",
        opacity: 0.3,
        y: 30
      },
      {
        color: "#000",
        opacity: 1,
        y: 0,
        stagger: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
          end: "top 30%",
          scrub: true,
        }
      }
    )
  }, [])

  return (
    <div className='page2_container'>
      <h2 ref={headingRef}>
        {lines.map((line, index) => (
          <span
            key={index}
            className="line"
            ref={(el) => (linesRef.current[index] = el)}
          >
            {line}
          </span>
        ))}
      </h2>

      <div className="Page2_video">
        <video
          src="/src/assets/127112-737747526.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>

      <Page3 />
      <Page4/>
    </div>
  )
}

export default Page2