import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const logo = (
<span>Martin Trčka</span>
)

const CLIENT_NAME = 'Jindřich Ručil • Developer - The creator of Bootstrap Theme Toggler';
const CLIENT_URL = 'https://martintrcka.github.io';

export default {
	darkMode: true,
	primaryHue: 212,
	primarySaturation: 100,
	logo,
	search: {
		component: null
  	},
	editLink: {
		component: null
	},
	feedback: {
		content: null
	},
	gitTimestamp: null,
	footer: {
		text: (
			<>
				<div className="jr-text-align nx-mb-2"> 
					<small>Martin Trčka &copy; {new Date().getFullYear()}</small>
				</div>
			</>	
		)
	},
	faviconGlyph: 'M',
	useNextSeoProps() {
		const { frontMatter } = useConfig()
		const { asPath } = useRouter()
	
		const seoProps = {
			additionalLinkTags: [
				{
					href: '/apple-icon-180x180.png',
					rel: 'apple-touch-icon',
					sizes: '180x180'
				},
				{
					href: '/android-icon-192x192.png',
					rel: 'icon',
					sizes: '192x192',
					type: 'image/png'
				},
				{
					href: '/favicon-32x32.png',
					rel: 'icon',
					sizes: '32x32',
					type: 'image/png'
				},
				{
					href: '/favicon-16x16.png',
					rel: 'icon',
					sizes: '16x16',
					type: 'image/png'
				}
			],
			additionalMetaTags: [
				{ content: 'en', httpEquiv: 'Content-Language' },
				{ content: 'width=device-width, initial-scale=1.0', name: 'viewport' },
				{ content: CLIENT_NAME, name: 'apple-mobile-web-app-title' },
				{ content: '#ffffff', name: 'theme-color' },
				{ content: '#ffffff', name: 'msapplication-TileColor' },
				{ content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
			],
			description: frontMatter.description || `${CLIENT_NAME}: Personal site`,
			openGraph: {
				url: asPath !== '/' ? `${CLIENT_URL}${asPath}` : CLIENT_URL,
				title: frontMatter.title || CLIENT_NAME,
				description: frontMatter.description || `${CLIENT_NAME}: Personal site`,
				images: [
					{
						url: frontMatter.image || `${CLIENT_URL}/og.png`,
						width: 1200,
						height: 630,
						alt: frontMatter.title || CLIENT_NAME
					}
				],
				type: 'website'
			},
			twitter: {
				cardType: 'summary_large_image',
				image: frontMatter.image || `${CLIENT_URL}/twitter.png`,
				site: '@jindrichrucil',
				url: asPath !== '/' ? `${CLIENT_URL}${asPath}` : CLIENT_URL
			}
		};
	
		if (asPath !== '/') {
			seoProps.titleTemplate = `%s | ${CLIENT_NAME}`;
		} else {
			seoProps.titleTemplate = CLIENT_NAME;
		}
	
		return seoProps;
	},
}
