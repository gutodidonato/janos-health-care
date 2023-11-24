import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params.id; 
  let URL = `http://localhost:8080/janusGs/webapi/paciente`;

  if (id > 0) {
    URL = `${URL}/${id}`;
  }

  const fetchContratos = async ()=> {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  }

  const data = await fetchContratos();

  return NextResponse.json(data); 
}
