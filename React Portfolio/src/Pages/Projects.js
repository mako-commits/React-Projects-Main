import React, { useState } from 'react'
import items from '../projectData'

import '../components/Project.css'


// new Set(.....) to get unique category instead of repeating them
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function Projects() {

    //set state values
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items);
            return;
        }
        // if 'item' catergory property matches the string passed,return that item to the new items array
        const newItems = items.filter((item) => item.category === category)

        // set menuItems = newItems
        setMenuItems(newItems)
    };



    return <main>
        <section id='project-section' className='menu section'>
            <div className='title'>
                <h2>My Work</h2>
                <div className='underline'></div>
            </div>
            <div className='project-btn-container'>
                {categories.map((category, index) => {
                    return (
                        <button
                            type='button'
                            className='filter-btn'
                            key={index}
                            onClick={() => filterItems(category)}
                        >
                            {category}
                        </button>
                    )
                })}

            </div>
            <div className='section-center'>
                {menuItems.map((menuItem) => {
                    const { id, title, img, stack, desc, url, repo, } = menuItem;
                    return (
                        <article key={id} className='menu-item'>
                            <img src={img} alt={title} className='photo' />
                            <div className='item-info'>
                                <header>
                                    <h4>{title}</h4>
                                    <h4 className='price'>{stack}</h4>
                                </header>

                                <p className='item-text'>{desc}</p>
                                <p className='item-text'>{url} </p>
                                <p className='item-text'>{repo} </p>
                            </div>
                        </article>
                    )
                })}

            </div>
        </section>
    </main>;

}


export default Projects
