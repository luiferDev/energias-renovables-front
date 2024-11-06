
import { Container } from '@radix-ui/themes'
import '../../src/styles/actualizar-solar.css'
import { Link } from 'react-router-dom'

export default function ActualizarSolar() {
    return (
        <Container size="1" align={'center'} pt={"9"}>
            <form className="form">
                <p id="heading">Actualizar Energía Solar</p>
                <div className="field">
                    <input placeholder="Nombre País" className="input-field" type="text" />
                </div>
                <div className="field">
                    <input placeholder="Energía Requerida" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Nivel Covertura" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Población" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Ubicación" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Capacidad Instalada" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Eficiencia" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Fecha Creación" className="input-field" type="date" />
                </div>
                <div className="field">
                    <input placeholder="Código" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Radiación Solar Promedio" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Area Paneles" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input placeholder="Angulo Inclinación" className="input-field" type="number" />
                </div>
                <div className="btn">
                    <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guardar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <Link to={'/'}>
                        <button className="button2">Cancelar</button>
                    </Link>

                </div>
                {/* <button className="button3">Forgot Password</button> */}
            </form>
        </Container>
    )
}
