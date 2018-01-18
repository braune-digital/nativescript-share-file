import { Observable } from 'tns-core-modules/data/observable';
import { ShareFile } from 'nativescript-share-file';
import * as fs from 'tns-core-modules/file-system';

export class HelloWorldModel extends Observable {
  public message: string;
  private shareFile: ShareFile;
  public documents: any;
  public fileName = '/test.txt'; // for testing use '/test.pdf' or '/test.txt'

  constructor() {
    super();
    this.documents = fs.knownFolders.currentApp();
    this.shareFile = new ShareFile();
    this.message = this.shareFile.message;
    setTimeout(() => {
      this.shareFile.open(this.documents.path + this.fileName);
    }, 3000);
  }
}
