let products = {
    data: [
        {
            id: 1,
            type: 'Monitor',
            name: 'Apple 24-inch iMac with Retina 4.5K display with 8-core CPU',
            link: 'Apple_iMac_Monitor',
            url: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80',
            price: 1498.32,
            description: "You’ve never seen a computer like this before. With a strikingly thin design made possible by the Apple M1 chip. An immersive 24-inch 4.5K Retina display with over a billion colors that give you the big picture in stunning detail",
            spec: ['256GB storage','8GB memory','Gigabit ethernet', 'Two Thunderbolt / USB 4 pots', '24-inch 4.5K Retina display','Magic Keyboard with Touch ID']
        },
        {
            id: 3,
            type: 'Mouse',
            name: 'Logitech MX Master 2S',
            link: 'Logitech_MX_Master_2S',
            url: 'https://images.unsplash.com/photo-1646771100257-acecde7990fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
            price: 69.98,
            description: "You’ve never seen a computer like this before. With a strikingly thin design made possible by the Apple M1 chip. An immersive 24-inch 4.5K Retina display with over a billion colors that give you the big picture in stunning detail",
            spec: ['256GB storage','8GB memory','Gigabit ethernet', 'Two Thunderbolt / USB 4 pots', '24-inch 4.5K Retina display','Magic Keyboard with Touch ID']
            
        },
        {
            id: 4,
            type: 'Keyboard',
            name: 'Magic Wireless Apple Keyboard',
            link: 'Wireless_Apple_Keyboard',
            url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80',
            price: 92.98,
            description: "Magic Keyboard with Touch ID and Numeric Keypad delivers a remarkably comfortable and precise typing experience. It features an extended layout, with document navigation controls for quick scrolling and full-size arrow keys, which are great for gaming. The numeric keypad is also great for spreadsheets and finance applications. It’s wireless and rechargeable, with an incredibly long-lasting internal battery that will power your keyboard for about a month or more between charges.¹ It pairs automatically with your Mac, so you can get to work right away.",
            spec: ['0.69 cm Heigth','27.9 cm Width','Multimeia keys', '0.24 kg', 'Ultra responsive connection']
        },
        {
            id: 2,
            type: 'Mouse',
            name: 'Logitech G102 LIGHTSYNC RGB',
            link: 'Logitech_G102',
            url: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            price: 30,
            description: "Make the most of your game time with G102 gaming mouse, featuring LIGHTSYNC technology, a gaming-grade sensor and a classic 6-button design. Light up your game … and your desk.",
            spec: ['LIGHTSYNC RGB lighting','6 programmable buttons','1000 Hz report rate', 'Two Thunderbolt / USB 4 pots', '32-bit ARM Microprocessor']
        },
        {
            id: 5,
            type: 'Keyboard',
            name: 'Keychron Q2 Mechanical Keyboard',
            link: 'Keychron_Keyboard',
            url: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            price: 149.21,
            description: "Setting the best example for efficient space usage, the Q5 has a compact 96% layout design while retaining all the essential functions and number keys. With its full metal CNC machined body, double-gasket design, and QMK/VIA support, the Q5 is the ultimate choice for an almost full-size keyboard.",
            spec: ['Blacklight RGB lighting','Aluminum body','100 Hz polling rate', 'Double gasket design']
        },
        {
            id: 6,
            type: 'Graphics card',
            name: 'GeForce RTX 2060 Graphics Card',
            link: 'Nvidia_RTX_2060',
            url: 'https://images.unsplash.com/photo-1555618568-bdf0a992c512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            price: 349,
            description: "The GeForce RTX™ 2060 is powered by the NVIDIA Turing™ architecture, bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. RTX. It’s On",
            spec: ['GPU Architecture: Turing', 'RTX-OPS: 37T', 'Boost Clock: 1680Mhz', 'Frame Buffer: 6GB GDDR6', 'Memory speed: 14Gbps']
        },
        {
            id: 7,
            type: 'Laptop',
            name: 'Dell Inspiron 15 3000',
            link: 'Dell Inspiron 15 3000',
            url: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            price: 299.99,
            description: "The GeForce RTX™ 2060 is powered by the NVIDIA Turing™ architecture, bringing incredible performance and the power of real-time ray tracing and AI to the latest games and to every gamer. RTX. It’s On",
            spec: ['Intel® Celeron® N4020', 'Windows 11 Home (S mode)', 'Intel® UHD 600', '256 GB SSD', '6 GB Memory', '15.6-in. display HD']
        },
        {
            id: 8,
            type: 'Processor',
            name: 'AMD Ryzen 7 3700X',
            link: 'AMD Ryzen 7 3700X',
            url: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            price: 319.29,
            description: "AMD Ryzen™ 7 3700X gives dominant gaming and streaming experience with a beautifully balanced design for serious PC enthusiasts",
            spec: ['8 cores', '3.6 Ghz', '16 threads', 'AM4 CPU Socket']
        },
    ]
}

export default products