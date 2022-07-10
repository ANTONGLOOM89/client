import { useRouter } from 'vue-router'

export const useNavigate = (id) => {
  const route = useRouter()
  const navigate = (id) => route.push(id)
  return { navigate }
}
