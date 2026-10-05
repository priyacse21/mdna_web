import { Link } from 'react-router-dom'

import SectionTitle from "../components/common/SectionTitle";

export default function NotFound() {
  return (<section className="bg-paper text-ink min-h-[60vh] py-48 px-6 md:px-12"><SectionTitle className="mb-7 md:mb-5">404 - Page not found</SectionTitle><h1>That route<br/>doesn't exist.</h1><Link className="inline-flex min-h-[45px] cursor-pointer items-center gap-[14px] px-[17px] text-[11px] font-bold no-underline transition-all duration-200 max-md:text-[10px] bg-violet text-white" to="/">Return home -&gt;</Link></section>)
}
