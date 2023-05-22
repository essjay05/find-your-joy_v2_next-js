import { useRouter } from "next/router"

const Project = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <h1>Project Id { id } Page</h1>
    </>
  )
}

export default Project