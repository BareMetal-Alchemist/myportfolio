import { useState, useEffect } from "react";

const WORDS = [
    "Cybersecurity",
    "Information Technology",
    "Software Development",
    "Systems Engineering",
    "Networking",
    "Hardware",
    "Research",
];

function TypingAnimation() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = WORDS[wordIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                const nextText = currentWord.slice(0, text.length + 1);
                setText(nextText);
            
                if (nextText === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1000);
                }
            }  else {
                const nextText = currentWord.slice(0, text.length - 1);
                setText(nextText);

                if (nextText === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % WORDS.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);

    return (
        <span className="typing-text" aria-label={text || WORDS[wordIndex]}>
            {text}
            <span className="cursor" aria-hidden="true">_</span>
        </span>
    );
}

export default TypingAnimation;
