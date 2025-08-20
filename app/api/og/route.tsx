import { ImageResponse } from 'next/og'

export const runtime = 'edge'

type Parameters = {
  title?: string
  date?: string
}

/*
 * To assist with generating dynamic Open Graph (OG) images, you can use the Vercel @vercel/og library
 * to compute and generate social card images using Vercel Edge Functions.
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
    const font600 = fetch(new URL('/public/assets/Barlow-SemiBold.ttf', import.meta.url)).then((res) => res.arrayBuffer())

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
          background: '#fff',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#BCBEC0',
            padding: '40px 40px',
            fontSize: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '24px',
              height: '24px',
              borderRadius: '24px',
              background: '#BCBEC0',
            }}
          />
          THIEN.DEV
        </div>

        <div
          style={{
            display: 'flex',
            flex: '1',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              flex: '1',
              gap: 12,
              background: '#fff',
              padding: '40px 40px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {date && (
                <div
                  style={{
                    color: '#00794c',
                    fontSize: '40px',
                    marginBottom: '16px',
                  }}
                >
                  {date}
                </div>
              )}
              {title ? (
                <div
                  style={{
                    color: '#000',
                    fontSize: '82px',
                    lineHeight: '92px',
                    fontWeight: 600,
                    marginBottom: '16px',
                    textTransform: 'uppercase',
                  }}
                >
                  {title}
                </div>
              ) : (
                <svg width="16" viewBox="0 0 75 65" fill="white">
                  <path d="M37.59.25l36.95 64H.64l36.95-64z" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: await font600,
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
