import { Section } from '@radix-ui/themes';
import './App.css'
import TableComponent from './Components/Table';
import Nav from './Components/Nav';



function App() {
  // const { number: solarNumber } = useNumbers('solar', '1');
  // const { number: eolicaNumber } = useNumbers('eolica', '1');
  // const { number: hidroelectricaNumber } = useNumbers('hidroelectrica', '1');
  // const { number: geotermicaNumber } = useNumbers('geotermica', '1');
  // const { number: biomasaNumber } = useNumbers('biomasa', '1');
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
        <TableComponent />
      </Section>

    </>
  )
}

export default App
