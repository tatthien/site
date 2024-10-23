import { ImageResponse } from 'next/og'

export const runtime = 'edge'

type Parameters = {
  title?: string
  date?: string
}

/*
 * To assist with generating dynamic Open Graph (OG) images, you can use the Vercel @vercel/og library to compute and generate social card images using Vercel Edge Functions.
 * @see: https://vercel.com/docs/functions/og-image-generation
 *
 * You can use the following code sample to explore using parameters and different content types with next/og.
 * @see: https://vercel.com/guides/dynamic-text-as-image
 *
 * For this example we are going to generate a simple social card image with a dynamic title.
 */
export async function GET(request: Request) {
  try {
    /*
     * Next we are going to extract the parameters from the request URL.
     */
    const { searchParams } = new URL(request.url)
    const parameters: Parameters = Object.fromEntries(searchParams)
    const { title, date } = parameters

    /*
     * Finally we are fetching the font file from the public directory.
     */
    const inter600 = fetch(new URL('/public/assets/inter/semi-bold.ttf', import.meta.url)).then((res) => res.arrayBuffer())

    return new ImageResponse(
      <div
        style={{
          /* layout */
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',

          /* style */
          fontSize: '24px',
          letterSpacing: '-0.47px',
          backgroundColor: '#fff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flex: '1',
            gap: 12,
            padding: '60px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {title ? (
              <div
                style={{
                  color: '#000',
                  fontSize: '60px',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                {title}
              </div>
            ) : (
              <svg width="16" viewBox="0 0 75 65" fill="white">
                <path d="M37.59.25l36.95 64H.64l36.95-64z" />
              </svg>
            )}
            {date && <div style={{ color: 'rgba(0, 0, 0, 0.4)' }}>{date}</div>}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '20px 60px',
            background: 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
            color: '#fff',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '24px',
              height: '24px',
              borderRadius: '24px',
              background: '#fff',
            }}
          />
          thien.dev
        </div>
      </div>,
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'Inter',
            data: await inter600,
            weight: 600,
          },
        ],
      },
    )
  } catch {
    return new Response('Failed to generate the image', {
      status: 500,
    })
  }
}
