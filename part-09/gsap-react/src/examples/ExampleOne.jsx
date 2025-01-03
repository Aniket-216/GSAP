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
            <div className="container">
                <div className="circle"></div>
                <div ref={boxRef} className="box"></div>
            </div>
            <div className="kuch">
                <div className="circle"></div>
                <div className="box"></div>
            </div>
        </main>
    );
}

export default App;
