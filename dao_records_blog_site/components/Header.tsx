import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center justify-between space-x-2">
        <Link href="/">
          <Image
            src="https://2549163913-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZiFiIZH5IkEYsWMUO4%2Fuploads%2FzR2Ri5XToPG2tWm7TRok%2FDocs.png?alt=media&token=46a7b4e1-1051-4ec7-a6d6-0a939ee9bc67"
            width={100}
            className="rounded-full"
            height={100}
            alt="logo"
          />
        </Link>
        <h1> Juno Communications</h1>
      </div>

      <div>
      <Link
        href="https://www.youtube.com/channel/UCNptx502adgY35LY28-zK4Q" 
        className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#FF7B7C] flex items-center rounded-full text-center"
        >
        Follow our YouTube channel here  
        </Link> 
      </div>
    </header>
  );
}

export default Header;
