import React from "react";

const IconComponent = ({ name }) => {
    // 🔹 Iconlar ro‘yxati
    const icons = {
        home: "<svg width='24' height='24' fill='currentColor'><path d='M3 12L12 3l9 9h-3v9H6v-9H3z'/></svg>",
        settings: "<svg width='24' height='24' fill='currentColor'><path d='M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm8.94-2.06l1.43 1.43-1.42 1.42-1.43-1.43a7.933 7.933 0 0 1-1.77 1.03l-.27 1.92h-2.02l-.27-1.92a7.933 7.933 0 0 1-1.77-1.03L8.05 16.3l-1.42-1.42 1.43-1.43a7.933 7.933 0 0 1-1.03-1.77l-1.92-.27v-2.02l1.92-.27a7.933 7.933 0 0 1 1.03-1.77L6.63 7.7l1.42-1.42 1.43 1.43a7.933 7.933 0 0 1 1.77-1.03l.27-1.92h2.02l.27 1.92a7.933 7.933 0 0 1 1.77 1.03l1.43-1.43L19.9 7.7l-1.43 1.43a7.933 7.933 0 0 1 1.03 1.77l1.92.27v2.02l-1.92.27a7.933 7.933 0 0 1-1.03 1.77z'/></svg>",
        user: "<svg width='24' height='24' fill='currentColor'><path d='M12 12c2.67 0 8 1.34 8 4v4H4v-4c0-2.66 5.33-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'/></svg>",
        strelka_chap:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701M3.5 12.0001H20.33" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
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
