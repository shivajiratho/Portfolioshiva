import Link from "next/link";

// Demo Button found in project pages
export default function ProjectButtonDemo(props: { url: string }): JSX.Element {
  const { url } = props;
  return (
    <Link href={url} target="_blank">
      <button
        type="button"
        className="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#4F46E5] to-[#60A5FA] text-white"
      >
        Demo
      </button>
    </Link>
  );
}
