import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-revalidate-secret');
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const { slug, lang, tags = [] } = body;

    if (slug && lang) {
      revalidatePath(`/${lang}/news/${slug}`);
    }

    for (const t of tags) {
      revalidateTag(t);
    }

    revalidatePath(`/${lang || 'en'}`);

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Revalidation failed' },
      { status: 500 }
    );
  }
}
