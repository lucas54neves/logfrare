import { homePageRouter } from "./homePageRouter"
import { registerLogsRouter } from "./registerLogsRouter"

export const routes: any = {
  '/': homePageRouter,
  '/logs': registerLogsRouter
}
