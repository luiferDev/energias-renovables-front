
import { Container } from '@radix-ui/themes'
import '../../src/styles/actualizar-solar.css'

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
                <div className="btn">
                    <button className="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                    <button className="button2">Sign Up</button>
                </div>
                <button className="button3">Forgot Password</button>
            </form>
        </Container>
    )
}
