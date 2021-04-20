import { LogRequestDTO } from "../dtos"
import { registerLogsService } from "../services/registerLogsService"
import { backuplog } from "../utils/backuplog"

export function registerLogsRouter(event: FetchEvent): Promise<Response> {
  // backuplog("registerLogsRouter1", "Entrou no log")

  backuplog("Executou microsservico", event.request.url)

  return registerLogsService(event)

  // backuplog("registerLogsRouter2", "Saiu no log")

  // return response
}
