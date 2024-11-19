import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Select, SelectContent, SelectTrigger } from '@/components/ui/select'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

import { navLink } from '@/constants'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
	return (
		<div className='w-4/5 mx-auto border-b h-24 rounded-md flex px-10 justify-between items-center'>
			{/* Website Logo */}
			<div className='flex gap-4 items-center'>
				<Image src={`/logo.png`} alt='' width={60} height={40} />
				<span className='text-3xl max-xl:hidden'>UzFK</span>
			</div>

			{/* Desktop navbar */}
			<div className='flex gap-4 max-xl:gap-1 max-lg:hidden'>
				{navLink.map(item => (
					<div key={item.id}>
						<Select>
							<SelectTrigger className='border-none bg-none font-medium text-lg text-green-600'>
								{item.name}
							</SelectTrigger>
							<SelectContent>
								{item.children.map(child => (
									<div
										key={child.slug}
										className='p-2 hover:bg-green-100 rounded-md'
									>
										<Link href={`/pages/${child.slug}`}>
											<span className='block cursor-pointer text-green-600'>
												{child.name}
											</span>
										</Link>
									</div>
								))}
							</SelectContent>
						</Select>
					</div>
				))}
			</div>

			{/* Mobile navbar */}
			<div className='lg:hidden'>
				<Sheet>
					<SheetTrigger>
						<Menu className='size-8 text-green-600' />
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>
								<div className='flex gap-4 items-center'>
									<Image src={`/logo.png`} alt='' width={60} height={40} />
									<span className='text-3xl'>UzFK</span>
								</div>
							</SheetTitle>
						</SheetHeader>
						{navLink.map(item => (
							<Accordion key={item.id} type='single' collapsible>
								<AccordionItem value={`${item.id}`}>
									<AccordionTrigger>{item.name}</AccordionTrigger>
									<AccordionContent className='space-y-2'>
										{item.children.map(child => (
											<div key={child.slug} className='space-y-2'>
												<Link
													href={`/pages/${child.slug}`}
													className='p-2 hover:bg-green-600 rounded-md transition-all hover:text-white'
												>
													{child.name}
												</Link>
											</div>
										))}
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						))}
					</SheetContent>
				</Sheet>
			</div>
		</div>
	)
}

export default Navbar
