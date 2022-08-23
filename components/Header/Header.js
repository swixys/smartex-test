import HeaderNav from "./HeaderNav";
import HeaderLogo from "./HeaderLogo";
import styles from "./Header.module.scss"

export default function Header() {

    const navLinks = {
        'links': [
            {
                'id':'1',
                'href':'/',
                'name':'main',
            },
            {
                'id':'2',
                'href':'/about',
                'name':'about',
            },
            {
                'id':'3',
                'href':'/projects',
                'name':'projects',
            },
            {
                'id':'4',
                'href':'/projects/single-project',
                'name':'single project',
            },
        ]
    }


    return (
        <header className={`${styles.head} wrapper`}>
            <HeaderLogo/>
            <HeaderNav navLinks={navLinks} />
        </header>
    )
}