import clientPromise from "@/lib/mongodb"
export async function POST(request) {
    const client = await clientPromise
    const body = await request.json()
    const db = client.db("BitTree")
    const collection = db.collection("links")

    //if the handle is already claimed you cannot claim that
    const doc =await collection.findOne({handle:body.handle})
    
    if(doc){
        return Response.json({ success: false, error: true, message: "Already Taken", result: null })
    }
    else{

  
        const result = await collection.insertOne(body)
    return Response.json({ success: true, error: false, message: "Added", result: result })
}
}