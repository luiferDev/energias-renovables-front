import { Section } from '@radix-ui/themes';
import './App.css'
import TableComponent from './Components/Table';
import Nav from './Components/Nav';
import { usePais } from './Hooks/usePais';
import TableRowComponent from './Components/TableRowComponent';



function App() {
  // const { number: solarNumber } = useNumbers('solar', '1');
  // const { number: eolicaNumber } = useNumbers('eolica', '1');
  // const { number: hidroelectricaNumber } = useNumbers('hidroelectrica', '1');
  // const { number: geotermicaNumber } = useNumbers('geotermica', '1');
  // const { number: biomasaNumber } = useNumbers('biomasa', '1');
  const data = usePais('Colombia')
  return (
    <>
      {/* <Grid columns={{ initial: "2", md: "3" }} gap="3" width="auto">
        <CardItem energy="Energia Solar" number={`${solarNumber} MW`} />
        <CardItem energy="Energia Eólica" number={`${eolicaNumber} MW`} />
        <CardItem energy="Energia Hidroeléctrica" number={`${hidroelectricaNumber} MW`} />
        <CardItem energy="Energia Geotérmica" number={`${geotermicaNumber} MW`} />
        <CardItem energy="Energia Biomasa" number={`${biomasaNumber} MW`} />
      </Grid> */}
      <Nav />
      <Section >
        <TableComponent energiaProperty='Radiación Solar'>
        {data.map((item) => (
                    // Solo renderizamos `TableRowComponent` si `item` está definido
                    item && <TableRowComponent key={item.pais.id} energia={'solar'} item={item} energiaFields={{ type: 'energia_solar', attribute: 'radiacionSolarPromedio' }} />
                ))}
        </TableComponent>
      </Section>

    </>
  )
}

export default App
