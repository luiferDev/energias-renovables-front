import { useEffect, useState } from 'react';
import { Table } from '@radix-ui/themes';
import TableRowComponent from './TableRowComponent';

function usePais(query) {
    const [pais, setPais] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/pais/energia-solar?nombre=${query}`)
            .then((res) => res.json())
            .then((data) => setPais(data));
    }, [query]);

    return pais;
}


export default function TableComponent() {
    const data = usePais('Colombia')
    console.log(data)
    // const [paisDetails, setPaisDetails] = useState(null)

    // const handleEdit = (id) => {
    //     // Realizamos un fetch usando el id
    //     fetch(`http://localhost:8080/api/pais/actualizar/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             // Guardamos los detalles del país en el estado
    //             setPaisDetails(data);
    //             console.log("Detalles del país:", data)
    //         })
    //         .catch((error) => {
    //             console.error("Error al obtener los detalles del país:", error);
    //         })

    //     console.log(paisDetails)
    // }

    // Obtenemos los valores de biomasaNumber para cada país de manera anticipada

    return (
        <Table.Root variant='surface'>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Pais</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Energía Requerida</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Nivel de Cobertura</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Población</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Ubicación Planta</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Capacidad Planta</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Radiación Solar Promedio</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Producción (MW)</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data.map((item) => (
                    // Solo renderizamos `TableRowComponent` si `item` está definido
                    item && <TableRowComponent key={item.pais.id} item={item} />
                ))}
            </Table.Body>
        </Table.Root>
    );
}
