import { getDBConnection } from "@/app/database/connection";
import { Movie } from "@/app/models/Movie";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    const connection = await getDBConnection()
    try {
        const movieRepository = await connection.getRepository(Movie).find()
        return NextResponse.json(movieRepository)
    } catch (error) {
        // Em caso de erro, retorna uma NextResponseposta de erro
        console.error('Erro:', error);
        return NextResponse.json({ auth: false, message: "Falha ao buscar os usuarios" })
    }
}