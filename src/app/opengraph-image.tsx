import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const font = await readFile(join(process.cwd(), 'public/fonts/Inconsolata.woff2'));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px 96px',
          backgroundColor: '#0a0a0f',
          fontFamily: 'Inconsolata, monospace',
          position: 'relative',
        }}
      >
        {/* gradient blobs */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          display: 'flex',
          background: 'radial-gradient(circle at 20% 30%, rgba(0,212,255,0.18) 0%, transparent 45%), radial-gradient(circle at 80% 70%, rgba(147,51,234,0.18) 0%, transparent 45%)',
        }} />

        {/* initials badge */}
        <div style={{
          display: 'flex',
          marginBottom: 40,
          width: 64,
          height: 64,
          borderRadius: 12,
          background: 'linear-gradient(135deg, #1ac7fe, #c8699e)',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          fontWeight: 700,
          color: '#ffffff',
        }}>
          AB
        </div>

        {/* name */}
        <div style={{
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: '-1px',
          background: 'linear-gradient(to right, #feb82d, #ff7882, #c8699e, #1ac7fe)',
          backgroundClip: 'text',
          color: 'transparent',
          marginBottom: 16,
          lineHeight: 1.1,
        }}>
          Anna Baidikova
        </div>

        {/* role */}
        <div style={{
          fontSize: 28,
          fontWeight: 500,
          color: 'rgba(255,255,255,0.7)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 48,
        }}>
          Frontend &amp; Fullstack Developer
        </div>

        {/* tags */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['React', 'TypeScript', 'Node.js', 'Stockholm'].map((tag) => (
            <div
              key={tag}
              style={{
                padding: '8px 20px',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 6,
                fontSize: 20,
                color: 'rgba(255,255,255,0.7)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* domain */}
        <div style={{
          position: 'absolute',
          bottom: 56,
          right: 96,
          fontSize: 20,
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.05em',
        }}>
          anna-baidikova-portfolio.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: 'Inconsolata', data: font, weight: 700 }],
    }
  );
}
