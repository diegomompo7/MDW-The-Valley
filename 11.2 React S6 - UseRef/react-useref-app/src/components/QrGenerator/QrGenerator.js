import './QrGenerator.scss'
import React from 'react'
import qrcode from "qrcode-generator"

const QrGenerator = () => {

    const inputRef = React.useRef()
    const qrRef = React.useRef()

    const [url, setUrl] = React.useState("");
    const [border, setBorder] = React.useState(false);

    const submit = (event) => {
        event.preventDefault()
        event.stopPropagation()
    }

    React.useEffect(() => {
        console.log("hola")
        const typeNumber = 4;
        const errorCorrectionLevel = 'L';
        const qr = qrcode(typeNumber, errorCorrectionLevel);
        qr.addData(url);
        qr.make();
        qrRef.current.innerHTML = qr.createImgTag()
    }, [url]);

    return (
        <div className='qr-generator'>
            <form onSubmit={submit}>
                <label htmlFor='url'>Introduce una URL: </label>
                <input placeholder='https://google.es' type="text" name='url' id='url' onChange={(event) => setUrl(event.target.value)}/>
                <button type="submit">Generar QR</button>
            </form>

            <div ref={qrRef} className={ `qr-generator__image ${ border ? 'qr-generator__image--border' : '' }` }></div>
            <button onClick={() => setBorder(!border)}>Añadir / Quitar borde</button>
            <div className="qr-generator__url">{url}</div>
        </div>
    )
}

export default QrGenerator