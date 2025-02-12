import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FaqSection.css";

const FaqSection = () => {
    const faqs = [
        {
            question: "Do Invisible Aligners really work?",
            answer: "Yes! Invisible aligners are proven to effectively correct alignment issues when used as directed."
        },
        {
            question: "How much do Invisible Aligners cost?",
            answer: "Costs vary based on your specific needs. Book a consultation with Aster Clinics for a customised quote."
        },
        {
            question: "Are clear aligners as good as Invisalign?",
            answer: "Invisalign is a brand of clear aligners known for exceptional quality and results. Our orthodontists at Aster Clinics can help you decide the best fit for you."
        },
        {
            question: "Which is faster: braces or Invisible Aligners?",
            answer: "For mild to moderate cases, invisible aligners often work faster. However, your treatment time depends on your unique needs."
        },
        {
            question: "Can I find affordable dental care near me for invisible aligners?",
            answer: "Yes! Aster Clinic offers affordable consultations and treatment plans for invisible aligners, making it easier for you to access quality orthodontic care at a dental clinic near you."
        },
        {
            question: "Are transparent aligners or braces better for teeth straightening?",
            answer: "Both options are effective for teeth alignment. Transparent aligners, however, are more discreet, removable, and comfortable, making them an excellent choice for those seeking a modern orthodontic solution."
        },
        {
            question: "How long does it take for invisible aligners to straighten teeth?",
            answer: "The duration varies depending on your case, but many patients see noticeable results within 6-18 months. Visit Aster Clinic for a consultation to get a personalised treatment timeline."
        },
        {
            question: "What makes Aster Clinic the best choice for orthodontic treatment near me?",
            answer: "At Aster Clinic, we combine advanced technology, experienced orthodontists, and convenient locations to provide top-tier orthodontic treatment. With personalised care, we’re your trusted partner in achieving a perfect smile."
        },
        {
            question: "How much does teeth straightening with clear aligners cost at Aster Clinic?",
            answer: "The cost of teeth straightening with clear aligners depends on the complexity of your case. However, Aster Clinic ensures competitive pricing with no hidden fees and provides transparent information during your consultation."
        }
    ];

    return (

        <div className="maincointainerpart">
        <div className="container mt-5" id="maincointainerpart">
            <h2 className="text-center mb-3">Frequently Asked Questions</h2>
            <div className="accordion accordion-flush" id="faqAccordion">

                {faqs.map((faq, index) => (
                    <div className="accordion-item rounded-3 border mb-2" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className="accordion-button collapsed rounded-3"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index}`}
                            >
                                {faq.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body rounded-3">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



        </div>
    );
};

export default FaqSection;