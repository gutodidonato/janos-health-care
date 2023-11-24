import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
  return (
    <>
    <footer className="rodape">
        <div className="integrantes-main">
        <h1 className="subtitulo">Integrantes</h1>
            <div>
                <figure>
                <Image src="/nicolas.jpg" alt='Nicolas' width={200} height={200}/>
                <figcaption>rm-551060 / 1TDSPG</figcaption>
                </figure>
                <figure>
                <Image src="/pedro.jpg" alt='Pedro' width={200} height={200}/>
                <figcaption>rm-551409 / 1TDSPG</figcaption>
                </figure>
                <figure>
                <Image src="/luis.jpg" alt='Luis' width={200} height={200}/>
                <figcaption>rm-99433 / 1TDSPG</figcaption>
                </figure>
                <figure>
                <Image src="/denner.jpg" alt='Denner' width={200} height={200}/>
                <figcaption>rm-551938 / 1TDSR</figcaption>
                </figure>
                <figure>
                <Image src="/diciotech.jpg" alt='Gabriell' width={200} height={200}/>
                <figcaption>rm-98361 / 1TDSPG</figcaption>
                </figure>
            </div>
        </div>
      </footer>
    </>
  )
}
