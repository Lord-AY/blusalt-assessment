import { useEffect, useRef } from "react";

export default function Links({ title, children }) {
  const ref = useRef();

  useEffect(() => {
    if (title === "Dashboard") {
      ref.current.focus();
    }

    return () => {};
  }, [title]);

  return (
    <a ref={ref} href="#" className="group outline-none">
      <div className="mt-[26px] flex items-center justify-between rounded-[5px] border-r-white py-[9px] px-[8.5px] group-focus:border-r-[3px] group-focus:bg-white/10">
        <div className="flex">
          <div className="mr-[12.5px]">{children}</div>
          <p className="">{title}</p>
        </div>
        {title === "Audit Trail" ? (
          <div className="float-right flex h-5 w-5 items-center justify-center rounded-full bg-white/40">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.22092 1.5575C9.22092 1.7485 9.14792 1.9405 9.00192 2.0865L5.53192 5.5735C5.39092 5.7145 5.19992 5.7935 4.99992 5.7935C4.80092 5.7935 4.60992 5.7145 4.46892 5.5735L0.996918 2.0865C0.704918 1.7935 0.704918 1.3195 0.998918 1.0265C1.29292 0.734497 1.76792 0.735497 2.05992 1.0285L4.99992 3.9815L7.93992 1.0285C8.23192 0.735497 8.70592 0.734497 8.99992 1.0265C9.14792 1.1725 9.22092 1.3655 9.22092 1.5575"
                fill="white"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </a>
  );
}
