import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { client } from "../../../../lib/sanity.client";
import { groq } from "next-sanity";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    * [_type=='post' && slug.current == $slug] [0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return <article className="px-10 pb.28">
    <section className="space-y-2 border border-[#FF7B7C] text-white">
        <div className="relative min-5-56 flex glex-col md:flex-row justify-between">
            <div className="asbsolute top-0 w-full h-full opacity-10 blur-sm p-10">
                <Image
                className="object-cover object-center mx-auto"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                />
            </div>
        </div>
    </section>

  </article>;
}

export default Post;
