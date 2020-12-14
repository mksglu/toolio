import app from "./app";
import { PORT } from "./config";
const { log } = console;

app.listen(PORT, () => {
  log("Express server listening on port " + PORT);
});
