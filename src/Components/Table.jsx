/* eslint-disable react/prop-types */
import { Table } from '@radix-ui/themes';

export default function TableComponent({ energiaProperty, children }) {
    

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
                    <Table.ColumnHeaderCell>{energiaProperty}</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Producción (MW)</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {children}
            </Table.Body>
        </Table.Root>
    );
}
