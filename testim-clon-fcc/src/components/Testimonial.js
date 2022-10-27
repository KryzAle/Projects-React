import React from "react";
import '../styles/Testimonial.css';

function Testimonial(props) {
    return (
        <div className="container-testimonial">
            <img
                className="image-testimonial"
                src="https://picsum.photos/200"
                alt="UserImage"
            />
            <div className="container-text-testimonial">
                <p className="testimonial-name">Testimonial 1</p>
                <p className="testimonial-role">Testimonial Role 1</p>
                <p className="testimonial-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos reiciendis, quasi vel esse aperiam saepe est sequi modi
                    voluptates cum repellat corporis maiores, fugiat
                    exercitationem eveniet culpa placeat ex incidunt?
                </p>
            </div>
        </div>
    );
}

export default Testimonial;