import Container from "@/app/_components/container";
import { BLOG_AUTHOR } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h4 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made by {BLOG_AUTHOR}
          </h4>
          
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
