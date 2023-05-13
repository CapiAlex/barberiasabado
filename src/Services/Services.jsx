export function Services() {

    let serviciosbarberia = [
        {
            nombre: "Afeitada profesional",
            precio: 20000,
            foto: "../../src/assets/img/afeitada.jpg",
            descripcion: "Afeitada con estilos vikingos, el valhala sera tu experiencia"
        },
        {
            nombre: "Corte de pelo",
            precio: 40000,
            foto: "../../src/assets/img/corte.avif",
            descripcion: "Se corta tu pelo con elegancia"
        },
        {
            nombre: "Cuidado de la piel",
            precio: 160000,
            foto: "../../src/assets/img/mascarilla.jpg",
            descripcion: "Mascarillas y lechugas para tus ojos"
        }
    ]

    return (
        <>
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3">
                {
                    serviciosbarberia.map(function (service) { 
                        return(
                            <div className="col mt-3">
                                <div className="card h-100 shadow text-center">
                                    <h1>{service.nombre}</h1>
                                    <img src={service.foto} className="img-fluid w-100" />
                                    <p>{service.descripcion}</p>
                                    <h3>Desde COP($) {service.precio} </h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>Por favor estudien</h1>
                </div>
            </div>
        </div>
        </>
    )
}