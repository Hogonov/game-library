import React, {useState} from 'react'
import styles from './index.module.scss'
import ButtonLink from "@/UI/buttonLink";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <header className={styles.main}>
            <div className={styles.headerForm}>
                <ButtonLink href={'/'}
                            styles={styles.headerButton}
                >Домой</ButtonLink>
                <input
                    type="text"
                    placeholder="Название игры"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className={styles.headerInput}
                />
                <ButtonLink
                    params={{name: 'search', value: searchTerm}}
                    styles={styles.headerButton}
                >Поиск</ButtonLink>
            </div>
        </header>
    );
};

export default Header;