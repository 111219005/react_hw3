module.exports = { 
    purge: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", // 修改這一行
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#89989A",                  
                },
            },
        ],
    },
}