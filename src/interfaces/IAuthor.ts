import IAlbum from "./IAlbum";

export default interface IAuthor {
  name: string;
  description: string;
  albums: IAlbum[];
}