// import React, { useEffect, useState } from "react";

// const Test6 = () => {
//   const [x, setX] = useState();
//   const [y, setY] = useState();
//   const [display, setDisplay] = useState(true);
//   const mouseLog = (e) => {
//     setX(e.clientX);
//     setY(e.clientY);
//   };
//   useEffect(() => {
//     console.log("mouseMove");
//     window.addEventListener("mousemove", mouseLog);
//     return () => {
//       console.log("unmount");
//       window.removeEventListener("mousemove", mouseLog);
//     };
//   }, []);
//   return (
//     <div>
//       <button onClick={() => setDisplay(!display)}>toggleButton</button>
//       {display && (
//         <>
//           <h3>x : {x}</h3>
//           <h3>y : {y}</h3>
//         </>
//       )}
//     </div>
//   );
// };

// export default Test6;
import React, { useEffect, useState } from "react";

const Test6 = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [display, setDisplay] = useState(true);

  const mouseLog = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("mouseMove");
    window.addEventListener("mousemove", mouseLog);
    return () => {
      console.log("unmount");
      window.removeEventListener("mousemove", mouseLog);
    };
  }, []); // empty dependency array

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggleButton</button>
      {display && (
        <>
          <h3>x : {x}</h3>
          <h3>y : {y}</h3>
        </>
      )}
    </div>
  );
};

export default Test6;
