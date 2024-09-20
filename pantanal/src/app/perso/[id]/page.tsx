import React from "react";
import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {
    id: string;
    name: string;
    status: string;
    species: string;
    image: string;
}

interface IDataStaticIndex {
    results: IData[];
}

const Perso = async ({params: {id}} : IPerso) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const data: IData = await res.json()

  return(
    <div>
        <h1>{data.name}</h1>
        <h2>{data.id}</h2>
        <p>{data.status}</p>
        <p>{data.species}</p>
        <Image src={data.image} alt="Fototeta" width={100} height={100} />
    </div>
  )
}

export async function generateStaticParams() {
    const res = await fetch(`https://rickandmortyapi.com/api/character`)
    const data: IDataStaticIndex = await res.json()
    
    return data.results.map((item) => item.id.toString())
}

export default Perso;