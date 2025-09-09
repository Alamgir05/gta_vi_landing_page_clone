import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Credit() {
  const creditRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      creditRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2 }
    );
  }, []);

  return (
    <div ref={creditRef} className="fixed bottom-4 right-6 text-gray-300 text-sm">
      Built by <span className="text-white font-semibold">Alamgir</span>
    </div>
  );
}
