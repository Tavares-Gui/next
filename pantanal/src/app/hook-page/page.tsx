import Link from "next/link";
import { Metadata } from "next";
import React, { Suspense } from "react";

type Tavares = {
    results: {
        name: string;
        status: string;
        id: string;
    }[]
}

export const metaData: Metadata = {
    title: "Lista de personagens",
    description: "TESTE DE API EU NOBRE",
}

const HookPage = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data: Tavares = await res.json()
    console.log(data)

    return(
        <>
            <h1>hmmmm???</h1>
            <Suspense fallback={<div>Loading...</div>}>
                {data?.results.map((item, index) => {
                    return(
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <p>{item.status}</p>
                            <Link href={`/perso/${item.id}`}>DUVIDO CLICAR EM MIM</Link>
                        </div>
                    );
                })}
            </Suspense>
        </>
    )
}

export default HookPage
