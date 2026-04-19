import { AppResponse } from "../utilis/response";
import { ValidateProfileSchema } from "../utilis/validation";
import { Service } from "../services/appservice";
export const CreateProfile = async (req, res) => {
    try {
        const parsed = ValidateProfileSchema.safeParse(req.body);
        if (!parsed.success) {
            AppResponse(res, 400, { status: "error", message: "Invalid request body", });
        }
        const profileCreation = await Service.CreateProfile(`${req.body.name}`);
        if (profileCreation.error != null) {
            AppResponse(res, profileCreation.status, profileCreation.data != null ? { status: "success", message: profileCreation.error, data: profileCreation.data } : { status: "error", message: profileCreation.error, });
            return;
        }
        AppResponse(res, 201, { status: "success", data: profileCreation.data });
        return;
    }
    catch (error) {
        AppResponse(res, 500, { status: "error", message: "An error occurred", data: null });
        return;
    }
};
export const CheckProfile = async (req, res) => {
    try {
        const { id } = req.params;
        if (id == null) {
            AppResponse(res, 400, { status: "error", message: "Invalid request parameters" });
            return;
        }
        const getProfile = await Service.GetProfile(id);
        if (getProfile.error != null) {
            AppResponse(res, getProfile.status, { status: "error", message: getProfile.error });
            return;
        }
        AppResponse(res, 200, { status: "success", data: getProfile.data });
        return;
    }
    catch (error) {
        AppResponse(res, 500, { status: "error", message: "An error occurred", data: null });
        return;
    }
};
export const GetAllProfiles = async (req, res) => {
    try {
        console.log(req.query);
        const query = req.query;
        const getProfiles = await Service.GetAllProfiles(query);
        if (getProfiles.error != null) {
            AppResponse(res, getProfiles.status, { status: "error", message: getProfiles.error });
            return;
        }
        AppResponse(res, 200, { status: "success", count: getProfiles.data.length, data: getProfiles.data });
        return;
    }
    catch (error) {
        AppResponse(res, 500, { status: "error", message: "An error occurred", data: null });
        return;
    }
};
export const DeleteProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProfile = await Service.DeleteProfile(id);
        if (deletedProfile?.error != null) {
            AppResponse(res, deletedProfile.status, { status: "error", message: deletedProfile.error });
            return;
        }
        AppResponse(res, deletedProfile.status, null);
        return;
    }
    catch (error) {
        AppResponse(res, 500, { status: "error", message: "An error occurred", data: null });
    }
};
