import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";

function App() {
    const [circle, setCircle] = useState(false);
    const random = gsap.utils.random(-500, 500, 100);

    useGSAP(() => {
        gsap.to(".circle", {
            x: circle,
            y: circle,
            duration: 1,
        });
    }, [circle]);

    return (
        <main>
            <button onClick={() => setCircle(random)}>Animate</button>
            <div className="circle"></div>
        </main>
    );
}

export default App;
