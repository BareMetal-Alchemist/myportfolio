import { useState, useEffect } from "react";

const WRDS = ["Cybersecurity", "Software", "Hardware", "Information Technology", "Networking", "Game Development", "Research"];

function TypingAnimation() {
    

    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = WRDS[wordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting){
                // Typing
                const nextText = currentWord.slice(0, text.length + 1);
                setText(nextText);
            
                if (nextText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }

            }  else {
                // Deleting
                const nextText = currentWord.slice(0, text.length - 1);
                setText(nextText);

                if (nextText === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % WRDS.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);

    return (
        <h2>
            {text}
            <span>_</span>
        </h2>
    );

}

export default TypingAnimation;