import React from "react";
import { useParams } from 'react-router-dom';

const faqs = [{
    question: "¿Cómo puedo llegar al concierto?",
    answer: "Hay autobuses que te dejan en la puerta",
    opened: false,
}, {
    question: "¿A qué hora abren puertas?",
    answer: "A las 18.00",
    opened: false,
}];

const Faqs = () => {
    let { id } = useParams();
    return (
        <div className="page faqs">
            <h1>FAQs</h1>

            <div className="faq">
                <p className="faq__question"><strong>{faqs[id].question}</strong></p>
                <p className="faq__answer">{faqs[id].answer}</p>
            </div>

        </div>
    )
}
export default Faqs