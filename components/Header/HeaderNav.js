import HeaderNavItem from "./HeaderNavItem";

export default function HeaderNav({navLinks}) {
    return (
        <nav>
            <ul>
                {
                    navLinks.links.map((link) => {
                            const {id, href, name} = link;
                            return(
                                <HeaderNavItem
                                    id={id}
                                    href={href}
                                    name={name}
                                />
                            )
                        }
                    )
                }
            </ul>
        </nav>
    )
}