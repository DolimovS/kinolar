import React from "react";

const IconComponent = ({ name }) => {
    // 🔹 Iconlar ro‘yxati
    const icons = {
        sun: `<svg xmlns="http://www.w3.org/2000/svg" width="24"          height="24"  viewBox="0 0 24 24" fill="none">
            <path d="M19.01 4.99L19.14 4.86M4.86 19.14L4.99 19.01M12 2.08V2M12 22V21.92M2.08 12H2M22 12H21.92M4.99 4.99L4.86 4.86M19.14 19.14L19.01 19.01M18.5 12C18.5 15.5899 15.5899 18.5 12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        oy:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2.03 12.42C2.39 17.57 6.76 21.76 11.99 21.99C15.68 22.15 18.98 20.43 20.96 17.72C21.78 16.61 21.34 15.87 19.97 16.12C19.3 16.24 18.61 16.29 17.89 16.26C13 16.06 9 11.97 8.98 7.13996C8.97 5.83996 9.24 4.60996 9.73 3.48996C10.27 2.24996 9.62 1.65996 8.37 2.18996C4.41 3.85996 1.7 7.84996 2.03 12.42Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        strelka_chap:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701M3.5 12.0001H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        admin:`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C14.6 22 16.96 21.01 18.74 19.38C18.64 18.44 18.04 17.52 16.97 16.8C14.25 14.98 9.77 14.98 7.03 16.8C5.96 17.52 5.36 18.44 5.26 19.38C7.04 21.01 9.4 22 12 22ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.72 11.28 8.72 9.51C8.72 7.7 10.18 6.23 12 6.23C13.81 6.23 15.28 7.7 15.28 9.51C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
             logoutadmin:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22 18C22 18.32 21.96 18.63 21.88 18.93C21.79 19.33 21.63 19.72 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.92 14.43 15.93 15.13 15.21C15.86 14.46 16.88 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.49 17.98H16.51" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
eye:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="#edeef0ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="#f7f8faff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

    };

    // 🔹 Iconni olish funksiyasi
    const getIcon = (iconName) => icons[iconName] || "";

    // 🔹 Icon mavjudligini tekshirish
    const iconExists = !!icons[name];

    // 🔹 JSX natija
    return (
        <div
            style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {iconExists ? (
                <span
                    dangerouslySetInnerHTML={{ __html: getIcon(name) }}
                    style={{ display: "inline-flex" }}
                />
            ) : (
                <span style={{ color: "red" }}>Icon not found</span>
            )}
        </div>
    );
};

export default IconComponent;
