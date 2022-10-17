export class FileUpload {
    key!: string;
    name!: string;
    url!: string;
    file: File;
     targetPath:string;
  
    constructor(file: File) {
      this.file = file;
      this.targetPath="";
    }
  }