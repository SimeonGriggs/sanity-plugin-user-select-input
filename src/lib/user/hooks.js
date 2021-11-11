import {useCurrentProject} from '../project'
import {useObservable} from '../utils/use'
import {getUser$} from './user'
import {getUserList$} from './userList'

export function useUser(userId) {
  const source = getUser$(userId)
  const initialState = null
  const keys = [userId]

  return useObservable(source, initialState, keys)
}

export function useUserList(userIds) {
  if (!userIds) {
    throw new Error('useUserList: `userIds` must be an array of strings')
  }

  const source = getUserList$(userIds)
  const initialState = null
  const keys = [userIds.join(',')]

  return useObservable(source, initialState, keys)
}

export function useProjectUsers() {
  const project = useCurrentProject()
  let error = false
  let loading = false

  if (project?.error) {
    error = project
  }

  if (project?.members) {
    loading = false
    error = false
  }

  const allUserIds = project?.members?.length ? project.members.map((user) => user.id) : []
  const projectUsers = useUserList(allUserIds)

  return {
    error,
    loading,
    projectUsers,
  }
}
