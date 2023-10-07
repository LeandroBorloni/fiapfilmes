import { useState } from "react"

export default function useFavorito(){
    const [favorito, setFavorito] = useState(false)
    function favoritar(){
        setFavorito(true)
        const options = {
            method: 'POST',

        }
    }
    function desfavoritar(){
        setFavorito(false)
        const options = {
            method: 'POST',
        }
    }

    return(favoritar, desfavoritar, favorito)
}