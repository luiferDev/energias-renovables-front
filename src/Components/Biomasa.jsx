import { Section } from "@radix-ui/themes";
import Nav from "./Nav";
import TableComponent from "./Table";
import { usePais } from "../Hooks/usePais";
import TableRowComponent from "./TableRowComponent";

export default function Biomasa() {
    const data = usePais('Colombia')
    return (
        <>
            <Nav />
            <Section >
                <TableComponent energiaProperty='Origen'>
                {data.map((item) => (
                    // Solo renderizamos `TableRowComponent` si `item` está definido
                    item && <TableRowComponent key={item.pais.id} energia='biomasa' item={item} energiaFields={{ type: 'biomasa', attribute: 'origen' }} />
                ))}
                </TableComponent>
            </Section>
        </>

    )
}
