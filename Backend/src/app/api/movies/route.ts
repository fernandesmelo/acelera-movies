import { getDBConnection } from "@/app/database/connection";
import { Movie } from "@/app/models/Movie";
import { NextResponse } from "next/server";

export async function GET(req:Request) {
    try {
        const connection = await getDBConnection();
        const movies = await connection.getRepository(Movie).find({
            select: ["id", "title", "releaseDate", "resume", "note"]
        });

        if (movies) {
            return NextResponse.json({ movies: movies, message: "Lista de filmes obtida com sucesso!" });
        } else {
            return NextResponse.json({ message: "Nenhum filme encontrado." });
        }
    } catch (error) {
        console.error('Erro:', error);
        return NextResponse.json({ message: "Falha ao buscar os filmes." });
    }
}


