import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";

export default function NotFound() {
  return (<section className="bg-paper text-ink min-h-[60vh] py-48 px-6 md:px-12">
    <SectionTitle className="mb-7 md:mb-5">404 - Page not found</SectionTitle>
    <h1>That route<br/>doesn't exist.</h1>
    <Button to="/" variant="purple">Return home -&gt;</Button>
    </section>)
}
