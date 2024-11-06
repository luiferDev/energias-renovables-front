import { TabNav } from "@radix-ui/themes"
import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <TabNav.Root>
            <Link to={"/"}>
                <TabNav.Link active={location.pathname === "/"} >
                    Energía Solar
                </TabNav.Link>
            </Link>
            <Link to={"/biomasa"}>
                <TabNav.Link active={location.pathname === "/biomasa"} >Biomasa</TabNav.Link>
            </Link>

            <Link to={"/eolica"}>
                <TabNav.Link active={location.pathname === "/eolica"} >Energía Eólica</TabNav.Link>
            </Link>

            <Link to={"/geotermica"}>
                <TabNav.Link active={location.pathname === "/geotermica"} >Energía Geotérmica</TabNav.Link>
            </Link>

            <Link to={"/hidroelectrica"}>
                <TabNav.Link active={location.pathname === "/hidroelectrica"} >Energía Hidroeléctrica</TabNav.Link>
            </Link>

        </TabNav.Root>
    )
}
