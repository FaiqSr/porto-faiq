import Link from "next/link";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
function ButtonToTop() {
  return (
    <>
      <Link href={"/#"} className="fixed bottom-8 right-8">
        <FaChevronUp size={40} />
      </Link>
    </>
  );
}

export default ButtonToTop;
