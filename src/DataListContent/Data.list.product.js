const PRODUCTS = [
    {
        id: Number,
        img: 'https://images.prom.ua/3034571986_w600_h600_3034571986.jpg',
        title: 'Джинсы',
        price: 3000,
        discount: 35
        
    },
    {
        id: Number,
        img: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/93/28535293/169391736169425400457.jpeg',
        title: 'Кроссовки Air Jordan',
        price: 3450,
        discount: 20
        
    },
    {
        id: Number,
        img: 'https://batyrshop.ru/wp-content/uploads/2021/01/IMG_E7139-scaled.jpg',
        title: 'Трекинговые кроссовки',
        price: 6350,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://img.joomcdn.net/91d5fbe421f97bda06a4137e6f0b0560796aeb40_original.jpeg',
        title: 'мужская куртка',
        price: 9830,
        discount: 25
        
    },
    {
        id: Number,
        img: 'https://images.uzum.uz/cjvev8rk9fqccmg2hm7g/original.jpg',
        title: 'Носки мужские',
        price: 300,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://images.prom.ua/3034571986_w600_h600_3034571986.jpg',
        title: 'Джинсы',
        price: 3000,
        discount: 35
        
    },
    {
        id: Number,
        img: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/93/28535293/169391736169425400457.jpeg',
        title: 'Кроссовки Air Jordan',
        price: 3450,
        discount: 20
        
    },
    {
        id: Number,
        img: 'https://batyrshop.ru/wp-content/uploads/2021/01/IMG_E7139-scaled.jpg',
        title: 'Трекинговые кроссовки',
        price: 6350,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://img.joomcdn.net/91d5fbe421f97bda06a4137e6f0b0560796aeb40_original.jpeg',
        title: 'мужская куртка',
        price: 9830,
        discount: 25
        
    },
    {
        id: Number,
        img: 'https://images.uzum.uz/cjvev8rk9fqccmg2hm7g/original.jpg',
        title: 'Носки мужские',
        price: 300,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://images.prom.ua/3034571986_w600_h600_3034571986.jpg',
        title: 'Джинсы',
        price: 3000,
        discount: 35
        
    },
    {
        id: Number,
        img: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/93/28535293/169391736169425400457.jpeg',
        title: 'Кроссовки Air Jordan',
        price: 3450,
        discount: 20
        
    },
    {
        id: Number,
        img: 'https://batyrshop.ru/wp-content/uploads/2021/01/IMG_E7139-scaled.jpg',
        title: 'Трекинговые кроссовки',
        price: 6350,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://img.joomcdn.net/91d5fbe421f97bda06a4137e6f0b0560796aeb40_original.jpeg',
        title: 'мужская куртка',
        price: 9830,
        discount: 25
        
    },
    {
        id: Number,
        img: 'https://images.uzum.uz/cjvev8rk9fqccmg2hm7g/original.jpg',
        title: 'Носки мужские',
        price: 300,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://images.prom.ua/3034571986_w600_h600_3034571986.jpg',
        title: 'Джинсы',
        price: 3000,
        discount: 35
        
    },
    {
        id: Number,
        img: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/93/28535293/169391736169425400457.jpeg',
        title: 'Кроссовки Air Jordan',
        price: 3450,
        discount: 20
        
    },
    {
        id: Number,
        img: 'https://batyrshop.ru/wp-content/uploads/2021/01/IMG_E7139-scaled.jpg',
        title: 'Трекинговые кроссовки',
        price: 6350,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://img.joomcdn.net/91d5fbe421f97bda06a4137e6f0b0560796aeb40_original.jpeg',
        title: 'мужская куртка',
        price: 9830,
        discount: 25
        
    },
    {
        id: Number,
        img: 'https://images.uzum.uz/cjvev8rk9fqccmg2hm7g/original.jpg',
        title: 'Носки мужские',
        price: 300,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://images.prom.ua/3034571986_w600_h600_3034571986.jpg',
        title: 'Джинсы',
        price: 3000,
        discount: 35
        
    },
    {
        id: Number,
        img: 'https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://images.zoodmall.com/web/product/picture/93/28535293/169391736169425400457.jpeg',
        title: 'Кроссовки Air Jordan',
        price: 3450,
        discount: 20
        
    },
    {
        id: Number,
        img: 'https://batyrshop.ru/wp-content/uploads/2021/01/IMG_E7139-scaled.jpg',
        title: 'Трекинговые кроссовки',
        price: 6350,
        discount: 5
        
    },
    {
        id: Number,
        img: 'https://img.joomcdn.net/91d5fbe421f97bda06a4137e6f0b0560796aeb40_original.jpeg',
        title: 'мужская куртка',
        price: 9830,
        discount: 25
        
    },
    {
        id: Number,
        img: 'https://images.uzum.uz/cjvev8rk9fqccmg2hm7g/original.jpg',
        title: 'Носки мужские',
        price: 300,
        discount: 5
        
    },


    

]



export {PRODUCTS}