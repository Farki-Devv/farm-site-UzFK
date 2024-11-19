import Navbar from '@/components/navbar'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'UzFK',
	description:
		' O`zbekiston fermer, dehqon xo`jaliklari va tomorqa yer egalari kengashi',
	icons: {
		icon: './logo.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className='py-2'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	)
}
