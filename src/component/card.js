import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagePath from '../assets/V.jpg';
import imagePath2 from '../assets/Person.jpg';
import imagePath3 from '../assets/edit-text.png';

function presentationCard(){
    return(
        <div className='Card'>
            <div class="container text-center ">
                <div class="row">
                    <div class="col">
                        <div class="card" >
                        <img src={imagePath2} class="card-img-top" alt="user"/>
                        <div class="card-body">
                            <h7 class="card-title">Name</h7>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Información</h5>
                            <div class="row"><h8 class="text-start">Correo electrónico</h8></div>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="usuario@gmail.com" aria-label="usuario@gmail.com" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} alt="edit"/></button>
                                </div>
                            <div class="row"><h8 class="text-start">Número de telefono</h8></div>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="912345678" aria-label="912345678" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} alt="edit"/></button>
                                </div>
                            <div class="row"><h8 class="text-start">Dirección</h8></div>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Av España 1450" aria-label="Av España 1450" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><img src={imagePath3} alt="edit"/></button>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-bg-dark">
                        <img src={imagePath} class="card-img" alt="location"/>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Dirección Asignada</h5>
                            <p class="card-text">Dirección</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default presentationCard