export type Product = {
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
}

const products: Product[] = [
    {
        id: "1",
        name: "32GB Hot Point Flash Disk",
        image: "flash_disk.jpg",
        description: "Compact and portable USB flash drive with fast data transfer speeds, perfect for storing and transferring photos, videos, documents, and more. Compatible with most devices via USB 2.0/3.0.",
        price: 1200.75
    },

    {
        id: "2",
        name: "Phillips Durable Immersion Electric Heater",
        image: "electric_heater.jpg",
        description: "Portable immersion electric heater ideal for quickly heating water in buckets or small containers. Features a durable heating element, easy operation, and energy-efficient performance.",
        price: 250.15
    },

    {
        id: "3",
        name: "Middle Class Family Multi-Purpose Gas Cooker",
        image: "oven.jpg",
        description: "Reliable and efficient gas cooker designed for fast and even cooking. Features sturdy burners, easy-to-use controls, and a durable build for everyday kitchen use.",
        price: 24900.35
    },

    {
        id: "4",
        name: "Hewlett Packard Large Size and Portable External Hard Disk",
        image: "external_hard_disk.jpg",
        description: "High-capacity external hard disk ideal for backing up and storing large files. Offers fast data transfer speeds, plug-and-play USB connectivity, and a compact, portable design.",
        price: 2750.00
    },

    {
        id: "5",
        name: "Techo F1 Smartphone",
        image: "tecno_f1.jpg",
        description: "The Tecno F1 is a budget-friendly smartphone featuring a 5.0-inch display, dual SIM support, and smooth performance with Android Go. Perfect for everyday tasks like calling, texting, and browsing.",
        price: 5199
    },

    {
        id: "6",
        name: "Iron Box",
        image: "iron_box.jpg",
        description: "Efficient and easy-to-use iron box designed for smooth, wrinkle-free clothes. Features adjustable temperature settings, a non-stick soleplate, and a comfortable grip for everyday ironing.",
        price: 2790.25
    },

    {
        id: "7",
        name: "San Disk",
        image: "san_disk.jpg",
        description: "Reliable SanDisk USB flash drive with fast data transfer speeds, ideal for storing and sharing documents, photos, and videos. Compact, durable, and compatible with most USB-enabled devices.",
        price: 1100.50
    },

    {
        id: "8",
        name: "Juice Blender",
        image: "juice_blender.jpg",
        description: "Powerful and versatile juice blender perfect for making smoothies, fresh juices, and shakes. Features sharp stainless steel blades, multiple speed settings, and an easy-to-clean design.",
        price: 3800.40
    },

    {
        id: "9",
        name: "Air Fryer",
        image: "air_fryer.jpg",
        description: "Healthy and convenient air fryer that uses hot air circulation to cook crispy meals with little to no oil. Features adjustable temperature control, timer, and a non-stick basket for easy cleaning.",
        price: 4675.85
    },

    {
        id: "10",
        name: "Digital Piano",
        image: "digital_piano.jpg",
        description: "Modern digital piano with realistic key action and high-quality sound, perfect for beginners and experienced players alike. Features multiple instrument voices, built-in speakers, and headphone support for silent practice.",
        price: 36790.45
    },

    {
        id: "11",
        name: "Infinix Android Smart TV remote",
        image: "tv_remote.jpg",
        description: "Compatible Infinix Android Smart TV remote with responsive buttons and easy navigation for seamless control of your TV. Lightweight, durable, and ready to use with no setup required.",
        price: 1235.95
    },

    {
        id: "12",
        name: "Red Transistor Radio",
        image: "transistor_radio.jpg",
        description: "Classic red transistor radio with clear sound and strong signal reception. Compact and portable design, ideal for listening to AM/FM stations at home or on the go.",
        price: 590.45
    },

    {
        id: "13",
        name: "Bluetooth Speaker",
        image: "bluetooth_speaker.jpg",
        description: "Powerful Bluetooth-enabled woofer with deep bass and crystal-clear sound. Supports wireless streaming, USB, AUX, and FM radio, making it perfect for home entertainment.",
        price: 4500.15
    },

    {
        id: "14",
        name: "Riverbank shelters",
        image: "1.jpg",
        description: "Classic red transistor radio with clear sound and strong signal reception. Compact and portable design, ideal for listening to AM/FM stations at home or on the go.",        
        price: 590.45
    },

    {
        id: "15",
        name: "Beach House",
        image: "2.jpg",
        description: "Compact and portable USB flash drive with fast data transfer speeds, perfect for storing and transferring photos, videos, documents, and more. Compatible with most devices via USB 2.0/3.0.",        
        price: 590.45
    },
    
    {
        id: "16",
        name: "Apartments",
        image: "4.jpg",
        description: "Reliable and efficient gas cooker designed for fast and even cooking. Features sturdy burners, easy-to-use controls, and a durable build for everyday kitchen use.",        
        price: 590.45
    },

    {
        id: "17",
        name: "Mega Library",
        image: "14.jpg",
        description: "The Tecno F1 is a budget-friendly smartphone featuring a 5.0-inch display, dual SIM support, and smooth performance with Android Go. Perfect for everyday tasks like calling, texting, and browsing.",        
        price: 590.45
    },

    {
        id: "18",
        name: "Space Cave",
        image: "15.jpg",
        description: "Efficient and easy-to-use iron box designed for smooth, wrinkle-free clothes. Features adjustable temperature settings, a non-stick soleplate, and a comfortable grip for everyday ironing.",        
        price: 590.45
    },

    {
        id: "19",
        name: "Lion Ranch",
        image: "16.jpg",
        description: "Powerful and versatile juice blender perfect for making smoothies, fresh juices, and shakes. Features sharp stainless steel blades, multiple speed settings, and an easy-to-clean design.",        
        price: 590.45
    },

    {
        id: "20",
        name: "Meeting Hall",
        image: "19.jpg",
        description: "Healthy and convenient air fryer that uses hot air circulation to cook crispy meals with little to no oil. Features adjustable temperature control, timer, and a non-stick basket for easy cleaning.",        
        price: 590.45
    },

    {
        id: "21",
        name: "Portable Inverter Generator",
        image: "generator.jpg",
        description: "2400-Watt Portable Inverter Generator, EPA Compliant, CO-Sensor, Eco-Mode Feature, Lightweight & Quiet Gas Powered Generators for Home Use.",
        price: 16490.45
    },

    {
        id: "22",
        name: "School Bag",
        image: "school_bag.jpg",
        description: "Perfect bag for students who need comfort and style on the go. With padded straps, multiple compartments, and water-resistant fabric, it keeps books, gadgets, and supplies safe and organized.",
        price: 870.00
    },
]

export default products