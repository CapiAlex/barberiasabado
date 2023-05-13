import "./Home.css"
import { Services } from "../Services/Services"
export function Home() {
    return (
        <>
            <section className="banner text-white fw-bold">
                <h2>THE BARBER SHOP...</h2>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>TITULO</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, minus dolorem? Eveniet in eum totam culpa laborum commodi. Libero voluptatum soluta vero et, quis quisquam recusandae facilis voluptatibus beatae perferendis.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <img src="../../src/assets/img/corte.avif" alt="corte" 
                            className="img-fluid w-100"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner2">
            </section>
        </>
    )
}