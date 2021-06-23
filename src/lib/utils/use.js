import { useEffect, useState, useMemo } from "react";
import userStore from "part:@sanity/base/user";
import schema from "part:@sanity/base/schema";

export function useObservable(stream, initialState = null, keys = []) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const sub = stream.subscribe(setState);
    return () => sub.unsubscribe();
  }, keys);

  return state;
}

export function useSchema(type) {
  return useMemo(() => schema.get(type), [type]);
}

export function useCurrentUser() {
  const [user, setUser] = useState()

  useEffect(() => {
    userStore.currentUser.subscribe(e => setUser(e.user))
  }, [])

  if (!user) {
    return {}
  }

  return user
}
