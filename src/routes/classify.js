import { CreateProfile, CheckProfile, GetAllProfiles, DeleteProfile } from "../handler/classify";
export function Classify(app) {
    app.post("/profiles", CreateProfile);
    app.get("/profiles/:id", CheckProfile);
    app.get("/profiles", GetAllProfiles);
    app.delete("/profiles/:id", DeleteProfile);
    return app;
}
