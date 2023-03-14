import gameShop1 from '../../Images/projects-screenshots/game-shop-1.JPG';
import gameShop2 from '../../Images/projects-screenshots/game-shop-2.JPG';
import gameShop3 from '../../Images/projects-screenshots/game-shop-3.JPG';
import gameShop4 from '../../Images/projects-screenshots/game-shop-4.JPG';

import jewelleryShop1 from '../../Images/projects-screenshots/jewellery-shop-1.JPG';
import jewelleryShop2 from '../../Images/projects-screenshots/jewellery-shop-2.JPG';
import jewelleryShop3 from '../../Images/projects-screenshots/jewellery-shop-3.JPG';
import jewelleryShop4 from '../../Images/projects-screenshots/jewellery-shop-4.JPG';

import addToCart1 from '../../Images/projects-screenshots/add-to-cart-1.JPG';
import addToCart2 from '../../Images/projects-screenshots/add-to-cart-2.JPG';

import planDesign1 from '../../Images/projects-screenshots/plan-design-1.JPG';
import planDesign2 from '../../Images/projects-screenshots/plan-design-2.JPG';

import planAndDesign1 from '../../Images/projects-screenshots/plan-n-design-1.JPG';
import planAndDesign2 from '../../Images/projects-screenshots/plan-n-design-2.JPG';
import planAndDesign3 from '../../Images/projects-screenshots/plan-n-design-3.JPG';
import planAndDesign4 from '../../Images/projects-screenshots/plan-n-design-4.JPG';

const projectGameShop = [
    {
        id: 1,
        itemId: 1,
        img: gameShop1,
        title: "The Game Shop",
        secondTitle: 'MERN Full Stack app',
        hrefLive: "https://the-game-shop-upek.web.app/",
        hrefGithub: "https://github.com/UpekkaChakma/the-game-shop-client"
    },
    {
        id: 2,
        itemId: 2,
        img: gameShop2,
        features: ['Fully functional frontend and backend with crud', 'Admin can create/update/delete game data', 'User can buy video-game', 'Can not if already purchased'],
        hrefLive: "https://the-game-shop-upek.web.app/",
        hrefGithub: "https://github.com/UpekkaChakma/the-game-shop-client"
    },
    {
        id: 3,
        itemId: 3,
        img: gameShop3,
        hrefLive: "",
        hrefGithub: ""
    },
    {
        id: 4,
        itemId: 4,
        img: gameShop4,
        hrefLive: "",
        hrefGithub: ""
    }
];

const projectJewelleryShop = [
    {
        id: 11,
        itemId: 1,
        img: jewelleryShop1,
        title: "Jewellery Shop",
        secondTitle: 'MERN Full Stack app',
        hrefLive: "https://jewellery-shop.vercel.app/",
        hrefGithub: "https://github.com/UpekkaChakma/ecommerce-jewellery-shop-full-stack-with-stripe"
    },
    {
        id: 12,
        itemId: 2,
        img: jewelleryShop2,
        features: ['Functional frontend with context api', 'Backend with sanity so CRUD is easier', 'User can add multiple items at the same time', 'Has payment system with Stripe'],
        hrefLive: "https://jewellery-shop.vercel.app/",
        hrefGithub: "https://github.com/UpekkaChakma/ecommerce-jewellery-shop-full-stack-with-stripe"
    },
    {
        id: 13,
        itemId: 3,
        img: jewelleryShop3,
        hrefLive: "",
        hrefGithub: ""
    },
    {
        id: 14,
        itemId: 4,
        img: jewelleryShop4,
        hrefLive: "",
        hrefGithub: ""
    }
];

const projectAddToCart = [
    {
        id: 21,
        itemId: 1,
        img: addToCart1,
        title: "Add-To & Remove From Cart",
        secondTitle: 'Front End app with redux-toolkit',
        hrefLive: "https://add-to-cart-with-redux-toolkit.vercel.app",
        hrefGithub: "https://github.com/UpekkaChakma/add-to-cart-with-redux-toolkit"
    },
    {
        id: 22,
        img: addToCart2,
        features: [],
        itemId: 2
    }
];

const projectPlanDesign = [
    {
        id: 31,
        itemId: 1,
        img: planDesign1,
        title: "Plan Design",
        secondTitle: 'Static HTML CSS page',
        hrefLive: "https://plan-ndesign-task-2.vercel.app",
        hrefGithub: "https://github.com/UpekkaChakma/planNdesign-task-2"
    },
    {
        id: 32,
        img: planDesign2,
        features: [],
        itemId: 2
    }
];

const projectPlanAndDesign = [
    {
        id: 41,
        itemId: 1,
        img: planAndDesign1,
        title: "Plan & Design",
        secondTitle: 'Static HTML CSS page',
        hrefLive: "plan-ndesign-task-1.vercel.app",
        hrefGithub: "https://github.com/UpekkaChakma/planNdesign-task-1"
    },
    {
        id: 42,
        itemId: 2,
        img: planAndDesign2,
        hrefLive: "",
        hrefGithub: ""
    },
    {
        id: 43,
        img: planAndDesign3,
        itemId: 3
    },
    {
        id: 44,
        img: planAndDesign4,
        itemId: 4
    }
];


export { projectGameShop, projectJewelleryShop, projectAddToCart, projectPlanDesign, projectPlanAndDesign };