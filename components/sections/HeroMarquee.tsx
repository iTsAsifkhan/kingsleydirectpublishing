import ShowcaseMarquee from './ShowcaseMarquee'
import DiscussCta from './DiscussCta'

export default function HeroMarquee() {
  return (
    <section className="section2 relative z-10" aria-label="Sample book covers">
      <DiscussCta />
      <ShowcaseMarquee />
    </section>
  )
}
