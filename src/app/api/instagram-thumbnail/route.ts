import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  if (!url) return NextResponse.json({ thumbnail: null })

  // Try oEmbed first (works if Instagram hasn't fully blocked it)
  try {
    const res = await fetch(
      `https://www.instagram.com/oembed/?url=${encodeURIComponent(url)}&omitscript=true`,
      { headers: { 'User-Agent': 'Mozilla/5.0' }, next: { revalidate: 86400 } },
    )
    if (res.ok) {
      const data = await res.json()
      if (data.thumbnail_url) return NextResponse.json({ thumbnail: data.thumbnail_url })
    }
  } catch {}

  // Fallback: scrape og:image from the post page
  // Instagram always includes og:image in the initial server-rendered HTML for Open Graph.
  try {
    const res = await fetch(url, {
      headers: {
        // Facebook's own crawler UA — Instagram serves full og:image meta for it
        'User-Agent':
          'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
        Accept: 'text/html,application/xhtml+xml',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      next: { revalidate: 86400 },
    })
    const html = await res.text()
    const match =
      html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/) ??
      html.match(/<meta\s+content="([^"]+)"\s+property="og:image"/)
    if (match?.[1]) {
      const thumbnail = match[1].replace(/&amp;/g, '&')
      return NextResponse.json({ thumbnail })
    }
  } catch {}

  return NextResponse.json({ thumbnail: null })
}
