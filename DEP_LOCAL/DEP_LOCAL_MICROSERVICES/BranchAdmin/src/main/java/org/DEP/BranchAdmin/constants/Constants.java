package org.DEP.BranchAdmin.constants;

public class Constants {

    private static final String BRANCH_ADMIN_SAVED = "Branch Admin Saved Successfully";
    private static final String BRANCH_ADMIN_NOT_SAVED = "Cannot save Branch Admin";

    private static final String BRANCH_ADMINS_FETCHED_SUCCESSFUL = "Branch Admins Fetched Successful";

    private static String NO_BRANCH_ADMIN_FOUND = "No branch admin found";

    private static String CANNOT_DELETE_BRANCH_ADMIN = "Cannot delete branch admin";

    private static String BRANCH_ADMIN_DELETED = "Branch admin deleted";

    public static String branchAdminSaved() {
        return BRANCH_ADMIN_SAVED;
    }

    public static String branchAdminNotSaved() {
        return BRANCH_ADMIN_NOT_SAVED;
    }


    public static String branchAdminsFetchedSuccessful() {
        return BRANCH_ADMINS_FETCHED_SUCCESSFUL;
    }

    public static String noBranchAdminFound() {
        return NO_BRANCH_ADMIN_FOUND;
    }

    public static String cannotDeleteBranchAdmin() {
        return CANNOT_DELETE_BRANCH_ADMIN;
    }

    public static String branchAdminDeleted() {
        return BRANCH_ADMIN_DELETED;
    }
}
