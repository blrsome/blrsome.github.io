import { HandlerContext } from '$fresh/server.ts'

export const handler = async(req: Request, _ctx: HandlerContext) => {
    const inurl = `https://blrsome-default-rtdb.firebaseio.com`,
        lng = new URLSearchParams(new URL(req.url).search).get('locale')
    return new Response(await fetch(
        lng ? `${inurl}/blrsp/${lng}.json`
            : `${inurl}/blrsp.json`).then(t => t.text()))
}