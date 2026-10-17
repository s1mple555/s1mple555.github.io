import type { APIRoute } from 'astro';
import { getPostSummaries } from '../../lib/posts';

export const GET: APIRoute = async () => new Response(JSON.stringify(await getPostSummaries()), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
