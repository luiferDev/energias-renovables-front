/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { Button, Table } from '@radix-ui/themes';
import { useNumbers } from '../Hooks/useNumbers';
import { Link } from 'react-router-dom';


// Nuevo componente para manejar cada fila y su biomasaNumber
export default function TableRowComponent({ item, energia, energiaFields }) {
    // Verificamos que `item` esté definido antes de usar `useNumbers`
    if (!item || !item.pais) return null;

    const energiaData = item[energiaFields.type]?.[energiaFields.attribute] || 'N/A';


    const { number: energiaNumber } = useNumbers(energia, item.pais.id);

    return (
        <Table.Row key={item.pais.id}>
            <Table.RowHeaderCell>{item.pais.nombre}</Table.RowHeaderCell>
            <Table.Cell>{item.pais.energiarequerida}</Table.Cell>
            <Table.Cell>{item.pais.nivelcovertura}</Table.Cell>
            <Table.Cell>{item.pais.poblacion}</Table.Cell>
            <Table.Cell>{item.plantaProduccion?.ubicacion || 'N/A'}</Table.Cell>
            <Table.Cell>{item.plantaProduccion?.capacidad_instalada || 'N/A'}</Table.Cell>
            <Table.Cell>{energiaData}</Table.Cell>
            <Table.Cell>{energiaNumber}</Table.Cell>
            <Table.Cell>
                <Link to={`/actualizar/${item.pais.id}`}>
                    <Button>Editar</Button>
                </Link>
            </Table.Cell>
        </Table.Row>
    );
}