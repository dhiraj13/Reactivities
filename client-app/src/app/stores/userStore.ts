import { makeAutoObservable, runInAction } from "mobx";

import { store } from "./store";
import agent from "../api/agent";
import { router } from "../router/Routes";
import { User, UserFormValues } from "../models/user";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (creds: UserFormValues) => {
    const user = await agent.Account.login(creds);
    store.commonStore.setToken(user.token);
    runInAction(() => (this.user = user));
    router.navigate("/activities");
  };

  logout = () => {
    store.commonStore.setToken(null);
    localStorage.removeItem("jwt");
    this.user = null;
    router.navigate("/");
  };
}
