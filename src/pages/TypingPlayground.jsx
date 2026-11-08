import { useState, useEffect } from "react";

function TypingPlayground() {
    const [isLeft, setIsLeft] = useState(true);
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        function handleKeyDown(event) {
            //Ignore if not letter
            if (event.key.length !== 1) {
                return;
            }

            let startX;

            if (isLeft) {
                startX = 10;
            } else {
                startX = 90;
            }

            const colors = [
                "#FF8FAB",
                "#FFC857",
                "#7BDFF2",
                "#B2F7EF",
                "#B8A1FF",
                "#e7f1ab",
            ];

            const newLetter = {
                id: Date.now() + Math.random(),
                character: event.key,

                x: startX,
                y: 85,

                vx: (Math.random() * 30 + 15) * (isLeft ? 1 : -1),
                vy: -(Math.random() * 80 + 90),
                gravity: Math.random() * 50 + 150,

                rotation: Math.random() * 60 - 30,
                rotationSpeed: Math.random() * 360 - 180,

                color: colors[Math.floor(Math.random() * colors.length)],
            };

            setLetters(prev => [...prev, newLetter]);


            //Change Next Shooting Direction
            setIsLeft(prev => !prev);
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isLeft]);

    useEffect(() => {
        let animationId;
        let previousTime = 0;

        function animate(currentTime) {
            if (previousTime === 0) {
                previousTime = currentTime;
            }

            const deltaTime = Math.min(
                (currentTime - previousTime) / 1000,
                0.05
            );

            previousTime = currentTime;

            setLetters(prevLetters => {
                if (prevLetters.length === 0) {
                    return prevLetters;
                }

                return prevLetters
                    .map(letter => ({
                        ...letter,

                        x: letter.x + letter.vx * deltaTime,

                        y: letter.y + letter.vy * deltaTime + 0.5 * letter.gravity * deltaTime * deltaTime,

                        vy: letter.vy + letter.gravity * deltaTime,

                        rotation: letter.rotation + letter.rotationSpeed * deltaTime,
                    }))
                    .filter(letter =>
                        letter.y < 110 &&
                        letter.x > -10 &&
                        letter.x < 110
                    );
            });

            animationId = requestAnimationFrame(animate);
        }

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div>
            <h2>Typing Playground</h2>
            <p>Press any key!</p>

            <div className="typing-area">
                {letters.map(letter => (
                    <span
                        key={letter.id}
                        style={{
                            left: `${letter.x}%`,
                            top: `${letter.y}%`,
                            color: letter.color,
                            transform: `rotate(${letter.rotation}deg)`,
                        }}
                    >
                        {letter.character}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TypingPlayground;
