import React, {useState} from "react";
import baseStyles from './index.module.scss'
import {useRouter} from "next/router";
import {Arrow} from "@/UI/arrow";


export const Dropdown = ({items, styles}) => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const [selected, setSelected] = useState(items[0]?.name);
    const router = useRouter()
    const showDropdownMenu = (event) => {
        event.preventDefault();
        setDisplayMenu(true);
    };

    const selectOption = (event) => {
        setSelected(event.target.innerText);
        setDisplayMenu(false);
        if (items[0].id)
            router.query.platforms = items[event.target.value].id
        else
            router.query.ordering = items[event.target.value].href
        router.push(router)
    };

    return (
        <div className={`${baseStyles.dropdown} ${styles}`}>
            <div className={baseStyles.dropdownSelected} onClick={showDropdownMenu}>
                {selected} <Arrow styles={baseStyles.arrow} direction={'down'}/>
            </div>
            {displayMenu ? (
                <ul className={baseStyles.dropdownMenu}>
                    {items.map((item, index) => {
                        return <li key={index} onClick={selectOption} value={index}>{item.name}</li>
                    })}
                </ul>
            ) : null}
        </div>
    );
};