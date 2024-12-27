import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { useRef } from "react";

function App() {
    const boxRef = useRef();
    useGSAP(() => {
        gsap.to(boxRef.current, {
            y: 30,
            rotate: 360,
            delay: 1,
            duration: 2,
        });
    });
    return (
        <main>
            <button>Move</button>
            <div className="circle"></div>
        </main>
    );
}

export default App;
