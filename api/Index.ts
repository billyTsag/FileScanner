import express from "express";
import * as testRoutes from "./routes/TestRoute";
import config from "./config/config.json"

const app = express();

app.use(testRoutes.default);
app.listen(config.api.port, () => {
    console.log(`Server running on port ${config.api.port}`);
});

export default app;