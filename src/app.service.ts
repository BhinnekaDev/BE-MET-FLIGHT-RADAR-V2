import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>API MetFlight Radar Meteorologi Bengkulu</title>

        <style>
          body {
            margin: 0;
            padding: 0;
            background: radial-gradient(circle at top, #111823, #0d1117 60%);
            color: #e6edf3;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
          }

          .container {
            max-width: 650px;
            padding: 20px;
          }

          h1 {
            font-size: 2.4rem;
            margin-bottom: 10px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }

          p {
            font-size: 1.15rem;
            opacity: 0.85;
            margin-bottom: 15px;
          }

          /* --- Button --- */
          a {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 28px;
            background: linear-gradient(90deg, #2ea043, #238636);
            color: white;
            text-decoration: none;
            border-radius: 10px;
            font-size: 1rem;
            font-weight: bold;
            transition: 0.25s ease;
            box-shadow: 0 0 10px rgba(46, 160, 67, 0.25);
          }

          a:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 16px rgba(46, 160, 67, 0.45);
          }

          /* ---------- Radar Enhanced ---------- */
          .radar {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            margin: 20px auto 30px;
            position: relative;
            border: 2px solid rgba(0, 255, 0, 0.25);
            background:
              radial-gradient(circle, rgba(0,255,0,0.10) 0%, transparent 70%),
              repeating-radial-gradient(
                circle,
                rgba(0,255,0,0.15) 0,
                rgba(0,255,0,0.05) 3px,
                transparent 3px,
                transparent 8px
              );
            overflow: hidden;
          }

          /* sweeping beam */
          .radar::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: conic-gradient(
              rgba(0,255,0,0.35) 0deg,
              rgba(0,255,0,0.1) 40deg,
              transparent 80deg
            );
            animation: sweep 2s linear infinite;
            filter: blur(1px);
          }

          /* radar grid lines */
          .radar::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background:
              repeating-conic-gradient(
                rgba(0,255,0,0.08) 0deg,
                rgba(0,255,0,0.02) 15deg
              );
          }

          @keyframes sweep {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }

          @media (max-width: 480px) {
            h1 { font-size: 1.8rem; }
            p  { font-size: 1rem; }
            .radar { width: 140px; height: 140px; }
          }
        </style>
      </head>

      <body>
        <div class="container">
          <div class="radar"></div>
          <h1>API MetFlight Radar Meteorologi Bengkulu</h1>
          <p>Dokumentasi API MetFlight Radar</p>
          <a href="/docs">Buka Dokumentasi</a>
        </div>
      </body>
      </html>
    `;
  }
}
