declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.JPG";
declare module "*.jpeg";
declare module "*.JPEG";
declare module "*.gif";
declare module "*.mp4";

declare module "*.txt?raw" {
  const content: string;
  export default content;
}
