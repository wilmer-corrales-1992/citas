import React, {Component} from "react";
import Cita from "./Cita"

class ListaCitas extends Component {
    state = {  } 
    render() { 
        const citas = this.props.citas
        const mensaje = Object.keys(citas).length === 0 ? "No hay citas" : "Administra tus citas aqui"
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="cart-title text-center">
                        {mensaje}
                    </h2>
                    <div className="lista-citas">
                        {Object.keys(citas).map(cita => (
                            <Cita
                                info={citas[cita]}
                                key={cita}
                                borrarCita={this.props.borrarCita}
                                idCita={cita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ListaCitas;