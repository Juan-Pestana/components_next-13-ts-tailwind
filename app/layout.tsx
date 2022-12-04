import './output.css'
import { Montserrat } from '@next/font/google'

const custom_font = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <style jsx global>
        {`
          :root {
            --custom-font: ${custom_font.style.fontFamily};
          }
        `}
      </style>
      <head />
      <body className="bg-gray-800 text-gray-200 h-screen">
        <header className="flex bg-gray-500 px-20 py-5">
          <div>Hello</div>
          <div className="flex-1"></div>
          <nav className="flex gap-6">
            <li className="list-none">About</li>
            <li className="list-none">Home</li>
            <li className="list-none">Blog</li>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
