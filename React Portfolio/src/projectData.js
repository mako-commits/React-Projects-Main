import React from 'react'
import { FaReact, FaHtml5, FaCss3, FaCode } from 'react-icons/fa'
import { SiJavascript } from "react-icons/si";
import { VscGlobe } from "react-icons/vsc";

const menu = [
    {
        id: 1,
        title: 'grocery bud',
        category: 'react',
        type: 'Web App',
        stack: <FaReact />,
        img: './images/grocery bud.png',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        // desc: `A simple budget calculator`,
        url: <a href='https://gocery-bud.vercel.app/' target='_blank'><VscGlobe className='icon' /> Demo</a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    },
    {
        id: 2,
        title: 'profile card',
        category: 'single webpage',
        stack: [<FaHtml5 />, <FaCss3 />],
        img: './images/profile card.png',
        desc: `An implementation of a profile card challenge by Frontend Mentors`,
        url: <a href='https://profile-card-component-lac-seven.vercel.app/' target='_blank'><VscGlobe className='icon' /> Demo</a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    },
    {
        id: 3,
        title: ' FAQ page',
        category: 'single webpage',
        stack: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
        img: './images/mycustomer faq.png',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        // desc: `A simple FAQ page with animations`,
        url: <a href='https://mycustomer-faq.herokuapp.com/faq.html' target='_blank'><VscGlobe className='icon' />  Demo</a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    },
    {
        id: 4,
        title: 'microApi blog post page',
        category: 'single webpage',
        stack: [<FaHtml5 />, <FaCss3 />],
        img: './images/microapi.png',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        // desc: `A simple blog post page `,
        url: <a href='https://microapi-blogpost.netlify.app/' target='_blank'><VscGlobe className='icon' /> Demo</a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    },
    {
        id: 5,
        title: 'iSense Landing PAge',
        category: 'single webpage',
        stack: [<FaHtml5 />, <FaCss3 />, <SiJavascript />],
        img: './images/isense.png',
        desc: `A simple landing page for a phone app with animations`,
        url: <a href='https://i-sense.herokuapp.com' target='_blank'><VscGlobe className='icon' /> Demo</a>,
        repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    },
    // {
    //     id: 6,
    //     title: 'oreo dream',
    //     category: 'shakes',
    //     stack: <FaReact />,
    //     img: './images/item-6.jpeg',
    //     desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    //     url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe className='icon' /> Demo</a>,
    //     repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    // },
    // {
    //     id: 7,
    //     title: 'bacon overflow',
    //     category: 'breakfast',
    //     stack: <FaReact />,
    //     img: './images/item-7.jpeg',
    //     desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    //     url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe className='icon' /> Demo</a>,
    //     repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    // },
    // {
    //     id: 8,
    //     title: 'american classic',
    //     category: 'lunch',
    //     stack: <FaReact />,
    //     img: './images/item-8.jpeg',
    //     desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    //     url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe className='icon' /> Demo</a>,
    //     repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    // },
    // {
    //     id: 9,
    //     title: 'quarantine buddy',
    //     category: 'shakes',
    //     stack: <FaReact />,
    //     img: './images/item-9.jpeg',
    //     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    //     url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe className='icon' /> Demo</a>,
    //     repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    // },
    // {
    //     id: 10,
    //     title: 'corona extra',
    //     category: 'dinner',
    //     stack: <FaReact />,
    //     img: './images/item-9.jpeg',
    //     desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    //     url: <a href='https://github.com/pythagoras-dev' target='_blank'><VscGlobe className='icon' /> Demo</a>,
    //     repo: <a href='https://twitter.com/home' target='_blank'><FaCode className='icon' /> Source Code</a>
    // },
];
export default menu;
