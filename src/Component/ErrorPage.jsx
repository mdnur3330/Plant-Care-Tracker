import { useLottie, useLottieInteractivity } from "lottie-react";
import robotAnimation from "./Animation - 1747932817819.json";
import { Link } from "react-router";

const style = {
  height: 400,
  margin: "0 auto",
};

const options = {
  animationData: robotAnimation,
};

const ErrorPage = () => {
  const lottieObj = useLottie(options, style);

  const InteractiveView = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "seek",
        frames: [0, 180],
      },
    ],
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {InteractiveView}
      <h1 className="text-4xl font-bold text-red-600 mt-8">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;


// import React from 'react';

// const ErrorPage = () => {
//     return (
//         <div>
//             this is reo
//         </div>
//     );
// };

// export default ErrorPage;
