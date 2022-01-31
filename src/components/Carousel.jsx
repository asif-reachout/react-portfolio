import React from 'react'
import { FaAngular, FaBook, FaBootstrap, FaCss3, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa'

function Carousel() {
    return (
        <div>

            <div className="carousel-parent position-relative">
                <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>Tehnolgies I Use</h1>
                <div className="gallery">
                    <span style={{ '--i': 1 }}> <FaReact color='cyan' /> </span>
                    <span style={{ '--i': 2 }}> <FaAngular color='#D82D2F' /> </span>
                    <span style={{ '--i': 3 }}> <FaJava color='orange' /> </span>
                    <span style={{ '--i': 4 }}> <FaBootstrap color='#7952B3' /> </span>
                    <span style={{ '--i': 5 }}> <FaHtml5 color='#DD4B25' /> </span>
                    <span style={{ '--i': 6 }}> <FaCss3 color='#264DE4' /> </span>
                    <span style={{ '--i': 7 }}> <FaNodeJs color='green' /> </span>

                </div>
            </div>
        </div>
    )
}

export default Carousel
