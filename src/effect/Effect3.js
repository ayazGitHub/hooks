// import React, { useState, useEffect } from "react";

// const Effect3 = () => {
//   const [x, setX] = useState();
//   const [y, setY] = useState();
//   const [display, setDisplay] = useState(true);
//   const mouseLog = (e) => {
//     setX(e.clientX);
//     setY(e.clientY);
//   };
//   useEffect(() => {
//     console.log("component Mounted");
//     window.addEventListener("mousemove", mouseLog);
//     return () => {
//       console.log("component unmount");
//       window.removeEventListener("mousemove", mouseLog);
//     };
//   }, []);
//   return (
//     <div>
//       <button onClick={() => setDisplay(!display)}> toggleDisplay</button>
//       {display && (
//         <>
//           <h3>{x}</h3>
//           <h3>{y}</h3>
//         </>
//       )}
//     </div>
//   );
// };

// export default Effect3;
import React, { useState, useEffect } from "react";

const Effect3 = () => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const [display, setDisplay] = useState(true);
  const mouseLog = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Effect3 component mounted");
    if (display) {
      window.addEventListener("mousemove", mouseLog);
    }
    return () => {
      console.log("Effect component unmounted");
      window.removeEventListener("mousemove", mouseLog);
    };
  }, [display]);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && (
        <>
          <h3>{x}</h3>
          <h3>{y}</h3>
        </>
      )}
    </div>
  );
};

export default Effect3;
