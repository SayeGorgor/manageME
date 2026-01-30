export async function GET(req, {params}) {
    const { slug } = await params;
    let res = {ok: false, message: 'Invalid Request', slug: slug}

    switch(slug) {
        case 'user':
            res = {ok: true, message: '', users: 'U thought'}
            return Response.json(res);
        default:
            return Response.json(res);
    }
}