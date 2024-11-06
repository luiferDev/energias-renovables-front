
import { Container } from '@radix-ui/themes'
import '../../src/styles/actualizar-solar.css'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

export default function ActualizarSolar() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(JSON.stringify(data));

    return (
        <Container size="1" align={'center'} pt={"9"}>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <p id="heading">Actualizar Energía Solar</p>
                <div className="field">
                    <input {...register("nombre")} placeholder="Nombre País" className="input-field" type="text" />
                </div>
                <div className="field">
                    <input {...register("energiaRequerida")} placeholder="Energía Requerida" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("nivelCovertura")} placeholder="Nivel Covertura" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("poblacion")} placeholder="Población" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("ubicacion")} placeholder="Ubicación" className="input-field" type="text" />
                </div>
                <div className="field">
                    <input {...register("capacidad_instalada")} placeholder="Capacidad Instalada" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("eficiencia")} placeholder="Eficiencia" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("fecha_creacion")} placeholder="Fecha Creación" className="input-field" type="date" />
                </div>
                <div className="field">
                    <input {...register("nombre")} placeholder="Código" className="input-field" type="text" />
                </div>
                <div className="field">
                    <input {...register("radiacionSolarPromedio")} placeholder="Radiación Solar Promedio" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("areaPaneles")} placeholder="Area Paneles" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("anguloInclinacion")} placeholder="Angulo Inclinación" className="input-field" type="number" />
                </div>
                <div className="field">
                    <input {...register("eficienciaPaneles")} placeholder="Eficiencia Paneles" className="input-field" type="number" />
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
