import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  if (!url) return NextResponse.json({ thumbnail: null })

  try {
    const res = await fetch(
      `https://www.instagram.com/oembed/?url=${encodeURIComponent(url)}&omitscript=true`,
      {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        next: { revalidate: 86400 }, // cache 24h
      },
    )
    if (!res.ok) return NextResponse.json({ thumbnail: null })
    const data = await res.json()
    return NextResponse.json({ thumbnail: (data.thumbnail_url as string) ?? null })
  } catch {
    return NextResponse.json({ thumbnail: null })
  }
}
