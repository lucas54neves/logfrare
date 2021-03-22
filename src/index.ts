import { corsListener } from "./listeners/corsListener"
import { eventListener } from "./listeners/eventListener"
import { favIconListener } from "./listeners/favIconListener"

addEventListener("fetch", corsListener)

addEventListener("fetch", favIconListener)

addEventListener("fetch", eventListener)