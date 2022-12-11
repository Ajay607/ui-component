import React, { useState } from 'react';
import styles from "./Accordion.css";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const openModal = (index) => {
        if (activeIndex < 0) {
            setActiveIndex(index);
        } else {
            setActiveIndex(-1);
        }
    };
    const accordionData = [
        {
            title: 'Is there a free trial available?',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
        },
        {
            title: 'The unseen of spending three years at Pixelgrade',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
        },
        {
            title: 'Starting your traveling blog with Vasco',
            content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
        },
    ];

    return (
        <div className="questionnarie">
            <div className="questionnarieWrapper">
                {accordionData.map(({ title, content }, index) => (
                    <div className="questionnarieContent" key={index}>
                        <div className="headWrapper" onClick={() => openModal(index)}>
                            <div className="heading">{title}</div>
                            <div className="action">
                                {index === activeIndex ?<span>-</span> : <span>+</span>}
                            </div>
                        </div>
                        <div className="content-outer">{index === activeIndex ? <div className={styles.content}>{content}</div> : undefined}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
