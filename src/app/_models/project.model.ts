export class Project {
  url: string;
  imgSource: string;
  projDescription: string;

    constructor(url: string, imgSource: string, projDescription?: string) {
      this.url = url;
      this.imgSource = imgSource;
      this.projDescription = projDescription || '';
    }
}
