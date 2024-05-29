import './component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import imagePath from '../assets/logout.png';

function header(){
    return(
        <div className="Header"> 
            <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href='./src/component/index.js' >Crisis Compass</a>
                <div class="row justify-content-end">
                    <div class="col">
                    <button type="button" class="btn">Usuario</button>
                    </div>
                    <div class="col">
                    <button class="btn btn-dark" type="submit"><img src={imagePath} class="card-img-top" alt="logout"/></button>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default header