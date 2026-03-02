export default {
    async fetch(request, env) {
        let url = new URL(request.url);

        // Serve the requested path from the uploaded asset directory
        // The Cloudflare internal asset fetching binding logic
        try {
            return await env.ASSETS.fetch(request);
        } catch (e) {
            return new Response("Not Found", { status: 404 });
        }
    }
};
