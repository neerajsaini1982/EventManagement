import { NextRequest, NextResponse } from "@/node_modules/next/server";

export function GET(request: NextRequest) {
	return NextResponse.json('Event ID API');
}