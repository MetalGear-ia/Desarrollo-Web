export const metadata = {
  title: 'Sonata',
  description: 'Tu sonido ideal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
