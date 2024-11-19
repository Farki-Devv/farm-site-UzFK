'use client'

import { navLink } from '@/constants'
import { useParams } from 'next/navigation'

const Page = () => {
	const { slug } = useParams()

	const pageContent = navLink
		.flatMap(item => item.children)
		.find(child => child.slug === slug)

	if (!pageContent) {
		return new Error('Page not found')
	}

	return (
		<div>
			<h1>{pageContent.name}</h1>
			<p>Content for {pageContent.name}</p>
		</div>
	)
}

export default Page
