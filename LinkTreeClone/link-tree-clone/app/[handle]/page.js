import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise
    const db = client.db("BitTree")
    const collection = db.collection("links")


    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }
    // const item2 = {

    //     "_id": {
    //         "$oid": "677c186c087b9eba717c29cc"
    //     },
    //     "links": [
    //         {
    //             "link": "https://www.linkedin.com/",
    //             "linktext": "LinkedIn"
    //         },
    //         {
    //             "link": "https://www.facebook.com/",
    //             "linktext": "Facebook"
    //         },
    //         {
    //             "link": "https://www.instagram.com/",
    //             "linktext": "Instagram"
    //         }
    //     ],
    //     "pic": "https://avatars.githubusercontent.com/u/149512500?s=400&v=4",
    //     "handle": "CodeWithShivcaran"

    // }

    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">

        <div className="pic flex justify-center flex-col items-center gap-4">
            <img src={item.pic} alt="" className="flex justify-center items-center" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return (
                        <div key={index} className="py-4 px-2 bg-purple-100 rounded-md my-3 min-w-96 flex justify-center">
                            <Link href={item.link}>
                                {item.linktext}
                            </Link>

                        </div>

                    )
                })}
            </div>
        </div>

    </div>
}