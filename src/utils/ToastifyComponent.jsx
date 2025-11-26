// src/utils/ToastifyComponent.jsx
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastifyComponent({ toastOptions }) {

  // ---------------- ICONS ----------------
  const icons = {
    success: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
        <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="white" strokeWidth="1.5" />
      </svg>
    ),

    error: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path d="M12 9V14" stroke="white" strokeWidth="1.5" />
        <path d="M6 21.4H18C21.5 21.4 23 18.9 21.3 15.9L18.2 10.3L15.2 5C13.4 1.8 10.5 1.8 8.8 5L5.8 10.3L2.7 15.9C1 18.9 2.5 21.4 6 21.4Z" stroke="white" strokeWidth="1.5" />
        <path d="M12 17H12.01" stroke="white" strokeWidth="2" />
      </svg>
    ),

    warning: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
        <path d="M12 2L2 22H22L12 2Z" stroke="white" strokeWidth="1.5" />
        <path d="M12 16H12.01" stroke="white" strokeWidth="2" />
        <path d="M12 10V12" stroke="white" strokeWidth="2" />
      </svg>
    ),
  };

  // -------------- COLORS --------------
  const colors = {
    success: "#4CAF50",
    error: "#FF543F",
    warning: "#FFC107",
  };

  // ❗ MAIN TOAST FUNCTION
  const showToast = ({ text, type = "success" }) => {
    toast(
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {icons[type]}
        <span>{text}</span>
      </div>,
      {
        position: "top-center",
        autoClose: 3000,
        style: {
          background: colors[type],
          color: type === "warning" ? "black" : "white",
          borderRadius: "10px",
          padding: "12px",
        },
      }
    );
  };

  // ❗ CONFIRM (Ha / Yo‘q) TOAST
  const showConfirmToast = ({ text, onYes, onNo }) => {
    toast(
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <strong>{text}</strong>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <button
            onClick={() => {
              toast.dismiss();
              onYes && onYes();
            }}
            style={{
              padding: "8px 16px",
              background: "#4CAF50",
              borderRadius: "8px",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Ha
          </button>

          <button
            onClick={() => {
              toast.dismiss();
              onNo && onNo();
            }}
            style={{
              padding: "8px 16px",
              background: "#FF543F",
              borderRadius: "8px",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Yo‘q
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        position: "top-center",
        style: {
          background: "#000", // ORQA FON QORA
          color: "white",
          borderRadius: "12px",
        },
      }
    );
  };

  // 🔔 AUTO OPEN LISTENER
  useEffect(() => {
    if (toastOptions?.openConfirm) showConfirmToast(toastOptions);
    else if (toastOptions?.open) showToast(toastOptions);
  }, [toastOptions]);

  return (
    <ToastContainer
      toastClassName="custom-toast"
      bodyClassName="custom-body"
      style={{ zIndex: 999999 }}
    />
  );
}

// Export
export { toast };












// // src/utils/ToastifyComponent.jsx
// import { useEffect } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function ToastifyComponent({ toastOptions }) {

//   // ---------------- ICONS ----------------
//   const icons = {
//     success: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
//         <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
//         <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="white" strokeWidth="1.5" />
//       </svg>
//     ),
//     error: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
//         <path d="M12 9V14" stroke="white" strokeWidth="1.5" />
//         <path d="M6 21.4H18C21.5 21.4 23 18.9 21.3 15.9L18.2 10.3L15.2 5C13.4 1.8 10.5 1.8 8.8 5L5.8 10.3L2.7 15.9C1 18.9 2.5 21.4 6 21.4Z" stroke="white" strokeWidth="1.5" />
//         <path d="M12 17H12.01" stroke="white" strokeWidth="2" />
//       </svg>
//     ),
//     warning: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
//         <path d="M12 2L2 22H22L12 2Z" stroke="white" strokeWidth="1.5" />
//         <path d="M12 16H12.01" stroke="white" strokeWidth="2" />
//         <path d="M12 10V12" stroke="white" strokeWidth="2" />
//       </svg>
//     ),
//   };

//   // -------------- COLORS --------------
//   const colors = {
//     success: "#4CAF50",
//     error: "#FF543F",
//     warning: "#FFC107",
//   };

//   // ❗ MAIN TOAST FUNCTION
//   const showToast = ({ text, type = "success" }) => {
//     toast(
//       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//         {icons[type]}
//         <span>{text}</span>
//       </div>,
//       {
//         style: {
//           background: colors[type],
//           color: type === "warning" ? "black" : "white",
//           borderRadius: "10px",
//           padding: "12px",
//         },
//         position: "top-center",
//         autoClose: 3000,
//       }
//     );
//   };

//   // ---------------- CONFIRM TOAST ----------------
//   const showConfirmToast = ({ text, onYes, onNo }) => {
//     toast(
//       <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
//         <strong>{text}</strong>

//         <div style={{ display: "flex", justifyContent: "space-between" }}>
//           <button
//             onClick={() => {
//               toast.dismiss();
//               onYes && onYes();
//             }}
//             style={{
//               padding: "6px 14px",
//               background: "#4CAF50",
//               color: "white",
//               borderRadius: "8px",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Ha
//           </button>

//           <button
//             onClick={() => {
//               toast.dismiss();
//               onNo && onNo();
//             }}
//             style={{
//               padding: "6px 14px",
//               background: "#FF543F",
//               color: "white",
//               borderRadius: "8px",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Yo‘q
//           </button>
//         </div>
//       </div>,
//       {
//         autoClose: false,
//         closeOnClick: false,
//         draggable: false,
//         position: "top-center",
//       }
//     );
//   };

//   // AUTO OPEN LISTENER
//   useEffect(() => {
//     if (toastOptions?.openConfirm) showConfirmToast(toastOptions);
//     else if (toastOptions?.open) showToast(toastOptions);
//   }, [toastOptions]);

//   return <ToastContainer />;
// }

// // Exports
// export { toast };





















// // // src/utils/ToastifyComponent.jsx
// // import { useEffect } from "react";
// // import { toast, ToastContainer } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // export default function ToastifyComponent({ toastOptions }) {
// //   const icons = {
// //     success: (
// //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
// //         <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
// //         <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="white" strokeWidth="1.5" />
// //       </svg>
// //     ),
// //     error: (
// //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
// //         <path d="M12 9V14" stroke="white" strokeWidth="1.5" />
// //         <path d="M6 21.4H18C21.5 21.4 23 18.9 21.3 15.9L18.2 10.3L15.2 5C13.4 1.8 10.5 1.8 8.8 5L5.8 10.3L2.7 15.9C1 18.9 2.5 21.4 6 21.4Z" stroke="white" strokeWidth="1.5" />
// //         <path d="M12 17H12.01" stroke="white" strokeWidth="2" />
// //       </svg>
// //     ),
// //     warning: (
// //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
// //         <path d="M12 2L2 22H22L12 2Z" stroke="white" strokeWidth="1.5" />
// //         <path d="M12 16H12.01" stroke="white" strokeWidth="2" />
// //         <path d="M12 10V12" stroke="white" strokeWidth="2" />
// //       </svg>
// //     ),
// //   };

// //   const colors = {
// //     success: "#4CAF50",
// //     error: "#FF543F",
// //     warning: "#FFC107",
// //   };

// //   const showToast = ({ text, type = "success" }) => {
// //     toast(
// //       <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //         {icons[type]}
// //         <span>{text}</span>
// //       </div>,
// //       {
// //         style: {
// //           background: colors[type],
// //           color: type === "warning" ? "black" : "white",
// //           borderRadius: "10px",
// //           padding: "12px",
// //         },
// //         position: "top-center",
// //         autoClose: 3000,
// //       }
// //     );
// //   };

// //   useEffect(() => {
// //     if (toastOptions?.open) {
// //       showToast(toastOptions);
// //     }
// //   }, [toastOptions]);

// //   return <ToastContainer />;
// // }

// // export { toast };
