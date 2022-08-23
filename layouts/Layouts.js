import Header from "../components/Header/Header";

import {Main} from "next/document";

export default function Layouts({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}