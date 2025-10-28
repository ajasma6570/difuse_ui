import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();
        const uuid = body.uuid;

        if (!uuid) {
            return NextResponse.json({ status: "error", error: "UUID is required" }, { status: 400 });
        }
        const verifyRes = await fetch(`${process.env.WARRANTY_CHECK_API_URL}/verify-identifier/${uuid}`);
        if (!verifyRes.ok) {
            return NextResponse.json({ status: "error", error: "Invalid UUID. Please check and try again." }, { status: 404 });
        }
        const verifyData = await verifyRes.json();
        if (!verifyData.valid) {
            return NextResponse.json({ status: "error", error: "Invalid UUID. Please check and try again." }, { status: 400 });
        }

        const allIdRes = await fetch(`${process.env.WARRANTY_CHECK_API_URL}/all-identifiers/${uuid}`);
        if (!allIdRes.ok) {
            return NextResponse.json({ status: "error", error: "Failed to fetch UUID details. Please try again later." }, { status: 500 });
        }
        const allIdData = await allIdRes.json();
        const { dbId, serial, uuid: foundUuid } = allIdData;

        const warrantyRes = await fetch(`${process.env.WARRANTY_CHECK_API_URL}/warranty/story`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: uuid }),
        });
        if (!warrantyRes.ok) {
            return NextResponse.json({ status: "error", error: "Could not fetch warranty info. Please try again later." }, { status: 500 });
        }
        const warrantyData = await warrantyRes.json();
        const { WarrantyDaysLeft, DaysLeftForWarrantyReg } = warrantyData;

        return NextResponse.json({
            status: "success",
            data: {
                dbId,
                serial,
                uuid: foundUuid,
                WarrantyDaysLeft,
                DaysLeftForWarrantyReg,
            }
        });
    } catch {
        return NextResponse.json({ status: "error", error: "Internal server error" }, { status: 500 });
    }
}
