import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function App() {
    const boxRef = useRef();

    const { contextSafe } = useGSAP();

    const rotateBox = contextSafe(() => {
        gsap.to(boxRef.current, {
            rotate: "+=360",
            duration: 1,
            modifiers: {
                rotate: (value) => value % 360,
            },
        });
    });
    return (
        <main>
            <button onClick={rotateBox}>Animate</button>
            <div ref={boxRef} className="box">
                Box
            </div>
        </main>
    );
}

export default App;
