import Link from "next/link";

export default function HeaderNavItem({id,href,name}) {
    return (
        <>
            <li key={id}>
                <Link href={href}>
                    <a> {name} </a>
                </Link>
            </li>
        </>
    )
}