import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function App() {
    const randomX = gsap.utils.random(-500, 500, 100);
    const rotateX = gsap.utils.random(-360, 360, 30);
    const randomY = gsap.utils.random(-200, 200, 30);

    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const [roti, setRoti] = useState(0);
    const imageRef = useRef();

    useGSAP(() => {
        gsap.to(imageRef.current, {
            x: xValue,
            y: yValue,
            duration: 1,
            ease: "power3.out",
            rotate: roti,
        });
    }, [xValue, yValue, roti]);

    return (
        <main>
            <button
                onClick={() => {
                    setXValue(randomX);
                    setYValue(randomY);
                    setRoti(rotateX);
                }}
            >
                Animate
            </button>
            {/* <div ref={imageRef} className="box"></div> */}
            <img
                ref={imageRef}
                src="https://png.pngtree.com/png-vector/20230318/ourmid/pngtree-cute-yellow-bee-cartoon-illustration-png-image_6653635.png"
                alt=""
            />
        </main>
    );
}

export default App;
