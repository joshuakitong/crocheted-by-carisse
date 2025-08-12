import { useEffect } from "react";

export default function WhereToBuy() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-section");

    function checkVisibility() {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          el.classList.add("visible");
        }
      });
    }

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);

    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <div className="animate-section flex flex-col items-center justify-center min-h-screen/2 text-center px-6 py-16">
      <h1 className="text-4xl font-bold text-[#e94326] mb-4">Where to buy?</h1>
      <p className="max-w-xl mb-8 text-[#695c53]">
        You can buy our handmade yarn mixes or made-to-order crocheted items from our{" "}
        <a
          href="https://www.facebook.com/crochetedbycarisse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9cc9cc] hover:underline"
        >
          Facebook
        </a>{" "}page. 
        We regularly release new yarn mixes every 2-3 weeks.
      </p>

      <h2 className="text-3xl font-bold text-[#e94326] mb-4">Find more about us</h2>
      <p className="max-w-xl text-[#695c53]">
        You can find more about us and our products on our social media pages:{" "}
        <a
          href="https://www.facebook.com/crochetedbycarisse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9cc9cc] hover:underline"
        >
          Facebook
        </a>{" "}|{" "}
        <a
          href="https://www.instagram.com/crochetedbycarisse"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9cc9cc] hover:underline"
        >
          Instagram
        </a>
      </p>
    </div>
  );
}
