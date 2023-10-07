"use client"

import { HeartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function CardFilme({filme}) {
    const url_imagem =`https://image.tmdb.org/t/p/w200/${filme.poster_path}`

    return (
        <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
            {/* {favorito ?
                <HeartIcon onClick={desfavoritar} className="h-6 w-6 text-rose-600" />
                :
                <HeartIcon onClick={favoritar} className="h-6 w-6 text-slate-100" />
            } */}
            <img className="rounded" src={url_imagem} alt=""></img>
            <span className="font-bold text-center line-clamp-1">{filme.title}</span>
            <div>
                <span>{filme.vote_average.toFixed(1)}</span>
            </div>
            <a href="#" className="bg-pink-600 py-2 w-full rounded text-center">Detalhes</a>
        </div>

    )
}