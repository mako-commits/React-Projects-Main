import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
// import { FaReact, FaHtml5, FaCss3, FaCode } from 'react-icons/fa'
import { SiJavascript } from "react-icons/si";
import { VscGlobe } from "react-icons/vsc";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/project',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

]




const menu = [
    {
        id: 1,
        title: 'grocery bud',
        category: 'react',
        type: 'Web App',
        stack: <FaIcons.FaReact />,
        img: '../../../public/item-2.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        stack: [<FaIcons.FaHtml5 />, <FaIcons.FaReact />],
        img: './images/item-2.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        stacke: <FaIcons.FaReact />,
        img: './images/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        stack: <FaIcons.FaReact />,
        img: './images/item-4.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        stack: <FaIcons.FaReact />,
        img: './images/item-5.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        stack: <FaIcons.FaReact />,
        img: './images/item-6.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        stack: <FaIcons.FaReact />,
        img: './images/item-7.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        stack: <FaIcons.FaReact />,
        img: './images/item-8.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        stack: <FaIcons.FaReact />,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
    {
        id: 10,
        title: 'corona extra',
        category: 'dinner',
        stack: <FaIcons.FaReact />,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe /></a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaIcons.FaCode /></a>
    },
];
export default menu;

