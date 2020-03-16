// const descriptions = {
//     REACT_APP_NETLIFY: {
//         data: process.env.NETLIFY ? process.env.NETLIFY : "N/A",
//         description: "Always true. Can be used to check if the build is running on Netlify."
//     },
//     REACT_APP_BUILD_ID: {
//         data: process.env.BUILD_ID ? process.env.BUILD_ID : "N/A",
//         description: "Unique ID for the build; for example: 5d4aeac2ccabf517d2f219b8."
//     },
//     REACT_APP_CONTEXT: {
//         data: process.env.CONTEXT ? process.env.CONTEXT : "N/A",
//         description: "Name of the build's deploy context. It can be production, deploy-preview or branch-deploy."
//     },
//     REACT_APP__system_arch: {
//         data: process.env._system_arch ? process.env._system_arch : "N/A",
//         description: "The system architecture of the current build image; for example, x86_64."
//     },
//     REACT_APP__system_version: {
//         data: process.env._system_version ? process.env._system_version : "N/A",
//         description: "The version of Ubuntu Linux running in the current build image; for example, 16.04."
//     },
//     REACT_APP_REPOSITORY_URL: {
//         data: process.env.REPOSITORY_URL ? process.env.REPOSITORY_URL : "N/A",
//         description: "URL for the linked Git repository."
//     },
//     REACT_APP_BRANCH: {
//         data: process.env.BRANCH ? process.env.BRANCH : "N/A",
//         description:
//             "Reference to check out after fetching changes from the Git repository. Can be useful for split testing."
//     },
//     REACT_APP_HEAD: {
//         data: process.env.HEAD ? process.env.HEAD : "N/A",
//         description: "Name of the head branch received from a Git provider."
//     },
//     REACT_APP_COMMIT_REF: {
//         data: process.env.COMMIT_REF ? process.env.COMMIT_REF : "N/A",
//         description: "Reference ID (also known as 'SHA' or 'hash') of the commit we're building."
//     },
//     REACT_APP_CACHED_COMMIT_REF: {
//         data: process.env.CACHED_COMMIT_REF ? process.env.CACHED_COMMIT_REF : "N/A",
//         description:
//             "Reference ID (also known as 'SHA' or 'hash') of the last commit that we built before the current build."
//     },
//     REACT_APP_PULL_REQUEST: {
//         data: process.env.PULL_REQUEST ? process.env.PULL_REQUEST : "N/A",
//         description: "Whether the build is from a pull/merge request (true) or not (false)."
//     },
//     REACT_APP_REVIEW_ID: {
//         data: process.env.REVIEW_ID ? process.env.REVIEW_ID : "N/A",
//         description:
//             "If from a pull/merge request, the ID of the request and the Deploy Preview it generated (e.g. 1211). These two numbers will always match. (For example, deploy-preview-12 is for PR #12 in your repository.)"
//     },
//     REACT_APP_URL: {
//         data: process.env.URL ? process.env.URL : "N/A",
//         description:
//             "This URL represents the main address to your site. It can be either a Netlify subdomain or your own custom domain if you set one; for example, https://petsof.netlify.com or https://www.petsofnetlify.com."
//     },
//     REACT_APP_DEPLOY_URL: {
//         data: process.env.DEPLOY_URL ? process.env.DEPLOY_URL : "N/A",
//         description:
//             "This URL represents the unique URL for an individual deploy. It starts with a unique ID that identifies the deploy; for example, https://5b243e66dd6a547b4fee73ae--petsof.netlify.com."
//     },
//     REACT_APP_DEPLOY_PRIME_URL: {
//         data: process.env.DEPLOY_PRIME_URL ? process.env.DEPLOY_PRIME_URL : "N/A",
//         description:
//             "This URL represents the primary URL for an individual deploy, or a group of them, like branch deploys and Deploy Previews; for example, https://feature-branch--petsof.netlify.com or https://deploy-preview-1--petsof.netlify.com."
//     },
//     REACT_APP_DEPLOY_ID: {
//         data: process.env.DEPLOY_ID ? process.env.DEPLOY_ID : "N/A",
//         description:
//             "Unique ID for the deploy; for example, 578ab634d6865d5cf960d620. Matches the beginning of DEPLOY_URL."
//     },
//     REACT_APP_NETLIFY_IMAGES_CDN_DOMAIN: {
//         data: process.env.NETLIFY_IMAGES_CDN_DOMAIN ? process.env.NETLIFY_IMAGES_CDN_DOMAIN : "N/A",
//         description:
//             "If image compression post processing is enabled, the base URL used for all processed images; for example, d33wubrfki0l68.cloudfront.net."
//     }
// };
const descriptions = {
    REACT_APP_NETLIFY: "Always true. Can be used to check if the build is running on Netlify.",
    REACT_APP_BUILD_ID: "Unique ID for the build; for example: 5d4aeac2ccabf517d2f219b8.",
    REACT_APP_CONTEXT: "Name of the build's deploy context. It can be production, deploy-preview or branch-deploy.",
    REACT_APP__system_arch: "The system architecture of the current build image; for example, x86_64.",
    REACT_APP__system_version: "The version of Ubuntu Linux running in the current build image; for example, 16.04.",
    REACT_APP_REPOSITORY_URL: "URL for the linked Git repository.",
    REACT_APP_BRANCH:
        "Reference to check out after fetching changes from the Git repository. Can be useful for split testing.",
    REACT_APP_HEAD: "Name of the head branch received from a Git provider.",
    REACT_APP_COMMIT_REF: "Reference ID (also known as 'SHA' or 'hash') of the commit we're building.",
    REACT_APP_CACHED_COMMIT_REF:
        "Reference ID (also known as 'SHA' or 'hash') of the last commit that we built before the current build.",
    REACT_APP_PULL_REQUEST: "Whether the build is from a pull/merge request (true) or not (false).",
    REACT_APP_REVIEW_ID:
        "If from a pull/merge request, the ID of the request and the Deploy Preview it generated (e.g. 1211). These two numbers will always match. (For example, deploy-preview-12 is for PR #12 in your repository.)",
    REACT_APP_URL:
        "This URL represents the main address to your site. It can be either a Netlify subdomain or your own custom domain if you set one; for example, https://petsof.netlify.com or https://www.petsofnetlify.com.",
    REACT_APP_DEPLOY_URL:
        "This URL represents the unique URL for an individual deploy. It starts with a unique ID that identifies the deploy; for example, https://5b243e66dd6a547b4fee73ae--petsof.netlify.com.",
    REACT_APP_DEPLOY_PRIME_URL:
        "This URL represents the primary URL for an individual deploy, or a group of them, like branch deploys and Deploy Previews; for example, https://feature-branch--petsof.netlify.com or https://deploy-preview-1--petsof.netlify.com.",
    REACT_APP_DEPLOY_ID:
        "Unique ID for the deploy; for example, 578ab634d6865d5cf960d620. Matches the beginning of DEPLOY_URL.",
    REACT_APP_NETLIFY_IMAGES_CDN_DOMAIN:
        "If image compression post processing is enabled, the base URL used for all processed images; for example, d33wubrfki0l68.cloudfront.net."
};

export default descriptions;
