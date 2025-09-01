import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2 className="text-red-500 text-6xl text-center">page in not defined</h2>
      <Link href={'/'} className="text-pink-600 text-3xl">go to home Page</Link>
    </div>
  )
}

export default NotFound
