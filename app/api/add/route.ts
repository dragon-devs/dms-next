import {NextRequest, NextResponse} from "next/server";
import {add} from "@/app/shared/add";

export async function GET(request: NextRequest) {

    return NextResponse.json(add(2,6), {status: 200});
}
