import styles from "./Header.module.scss"
import Logo from '../../images/Smartex_logo.svg'
import Image from 'next/image'
import Link from "next/link";

export default function HeaderLogo() {
    return (
        <>
            <span className={styles.logo}>
                <Link href={'/'}>
                    <a>
                            <Image
                                src={Logo}
                                alt="Logo site"
                            />
                    </a>
                </Link>
             </span>
        </>
    )
}