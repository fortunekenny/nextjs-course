import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";



export function GET(request: NextRequest){
    return NextResponse.json([
        {id: 1, name: 'Ken'},
        {id: 2, name: 'Tab'}
    ]);
}


export async function POST(request: NextResponse){
    const body = await request.json()
    const validation = schema.safeParse(body)
        if (!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})
    return NextResponse.json({id: 1, name: body.name}, {status: 201})
}